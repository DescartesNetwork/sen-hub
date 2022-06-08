import { useCallback, useEffect, useState } from 'react'
import useSWRImmutable from 'swr/immutable'

const fetchJupiterTokenList = async () => {
  const data = await fetch('https://cache.jup.ag/tokens')
  return data.json()
}

export const useJupiterTokenList = () => {
  const [jupiterTokenList, setJupiterTokenList] = useState<
    Map<string, boolean>
  >(new Map())
  const { data } = useSWRImmutable('fetchJpTokenList', fetchJupiterTokenList)

  useEffect(() => {
    if (data) {
      const formattedTokenList = new Map<string, boolean>()
      for (let i = 0; i < data.length; i++) {
        formattedTokenList.set(data.address, true)
      }

      setJupiterTokenList(formattedTokenList)
    }
  }, [data])

  const verify = useCallback(
    (address: string): boolean => {
      return jupiterTokenList.has(address)
    },
    [jupiterTokenList],
  )

  return { verify }
}
