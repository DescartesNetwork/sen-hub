import { useCallback, useEffect, useState } from 'react'
import { DataLoader } from 'shared/dataloader'

export const useJupiterTokenList = () => {
  const [jupiterTokenList, setJupiterTokenList] = useState<string[]>([])

  const fetchJupiterList = async () => {
    const data = await fetch('https://cache.jup.ag/tokens')
    return data.json()
  }

  const setTokenList = useCallback(async () => {
    const tokenList = await DataLoader.load('fetchJpTokenList', () =>
      fetchJupiterList(),
    )
    const formatedTokenList = tokenList.map((token: any) => token.address)
    setJupiterTokenList(formatedTokenList)
  }, [])

  const verify = useCallback(
    (address: string): boolean => {
      return jupiterTokenList.includes(address)
    },
    [jupiterTokenList],
  )

  useEffect(() => {
    setTokenList()
  }, [setTokenList])

  return { verify }
}
