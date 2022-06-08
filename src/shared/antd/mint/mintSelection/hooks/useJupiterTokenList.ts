import { useCallback, useEffect, useState } from 'react'
import useSWRImmutable from 'swr/immutable'

const fetchJupiterList = async () => {
  const data = await fetch('https://cache.jup.ag/tokens')
  return data.json()
}

export const useJupiterTokenList = () => {
  const [jupiterTokenList, setJupiterTokenList] = useState<string[]>([])
  const { data } = useSWRImmutable('fetchJpTokenList', fetchJupiterList)

  useEffect(() => {
    if (data) {
      const formatedTokenList = data.map((token: any) => token.address)
      setJupiterTokenList(formatedTokenList)
    }
  }, [data])

  const verify = useCallback(
    (address: string): boolean => {
      return jupiterTokenList.includes(address)
    },
    [jupiterTokenList],
  )

  return { verify }
}
