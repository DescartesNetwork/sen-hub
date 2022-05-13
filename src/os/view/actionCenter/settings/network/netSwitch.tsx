import { Select } from 'antd'

const { net, onSwitchNetwork } = window._sentre

const NetSwitch = () => {
  return (
    <Select defaultValue={net} onChange={onSwitchNetwork} size="small">
      <Select.Option value="devnet">Devnet</Select.Option>
      <Select.Option value="testnet" disabled>
        Testnet
      </Select.Option>
      <Select.Option value="mainnet">Mainnet</Select.Option>
    </Select>
  )
}

export default NetSwitch
