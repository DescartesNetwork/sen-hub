import { useCallback, useEffect, useMemo, useState } from 'react'
import { useAccount } from '@senhub/providers'

import { useJupiterTokenList } from 'shared/antd/mint/mintSelection/hooks/useJupiterTokenList'

export const useSortMints = (mints: string[]) => {
  const [sortedMints, setSortedMints] = useState<string[]>([])
  const { verify } = useJupiterTokenList()
  const { accounts } = useAccount()

  const mapMintAmounts = useMemo(() => {
    const mapMints: Record<string, number> = {}
    for (const account of Object.values(accounts)) {
      mapMints[account.mint] = Number(account.amount.toString())
    }
    return mapMints
  }, [accounts])

  const sortMints = useCallback(
    async (mintAddresses: string[]) => {
      const sortedMints = mintAddresses.sort((a, b) => {
        let isVerifyA = verify(a)
        let isVerifyB = verify(b)
        let amountA = mapMintAmounts[a] || (isVerifyA ? 1 : -1)
        let amountB = mapMintAmounts[b] || (isVerifyB ? 1 : -1)

        return Number(amountB) - Number(amountA)
      })
      return setSortedMints(sortedMints)
    },
    [mapMintAmounts, verify],
  )
  useEffect(() => {
    sortMints(mints)
  }, [mints, sortMints])

  return { sortedMints, sortMints }
}
