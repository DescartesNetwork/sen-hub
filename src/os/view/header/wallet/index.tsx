import { CSSProperties, Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { account } from '@senswap/sen-js'

import { Button, ButtonProps } from 'antd'
import IonIcon from 'shared/ionicon'
import Login from './login'

import session from 'shared/session'
import { RootDispatch, RootState } from 'os/store'
import {
  connectWallet,
  openWallet,
  disconnectWallet,
} from 'os/store/wallet.reducer'
import {
  Coin98Wallet,
  PhantomWallet,
  SecretKeyWallet,
  SolletWallet,
  SlopeWallet,
} from './lib'

export const DisconnectWallet = ({
  title = 'Disconnect',
  ...rest
}: {
  text?: string
} & ButtonProps) => {
  const dispatch = useDispatch<RootDispatch>()
  const { address } = useSelector((state: RootState) => state.wallet)

  if (!account.isAddress(address)) return null
  return (
    <Button
      icon={<IonIcon name="power-outline" />}
      onClick={() => dispatch(disconnectWallet())}
      {...rest}
    >
      {title}
    </Button>
  )
}

const Wallet = ({ style = {} }: { style?: CSSProperties }) => {
  const dispatch = useDispatch<RootDispatch>()
  const { address } = useSelector((state: RootState) => state.wallet)

  const reconnect = () => {
    const walletType = session.get('WalletType')
    if (walletType === 'SecretKey')
      return new SecretKeyWallet(session.get('SecretKey'))
    if (walletType === 'Keystore')
      return new SecretKeyWallet(session.get('SecretKey'))
    if (walletType === 'Coin98') return new Coin98Wallet()
    if (walletType === 'Phantom') return new PhantomWallet()
    if (walletType === 'Sollet') return new SolletWallet()
    if (walletType === 'Slope') return new SlopeWallet()
    return null
  }

  useEffect(() => {
    const wallet = reconnect()
    try {
      if (wallet) dispatch(connectWallet(wallet)).unwrap()
    } catch (er) {
      return window.notify({
        type: 'error',
        description: (er as Error).message,
      })
    }
  }, [dispatch])

  if (account.isAddress(address)) return null
  return (
    <Fragment>
      <Button
        style={style}
        type="primary"
        icon={<IonIcon name="wallet-outline" />}
        onClick={() => dispatch(openWallet())}
      >
        Connect Wallet
      </Button>
      <Login />
    </Fragment>
  )
}

export default Wallet
