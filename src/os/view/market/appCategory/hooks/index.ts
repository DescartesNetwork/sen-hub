import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  CategoryFilter,
  RelatedCategory,
  filterApp,
  findSuggestedApps,
  findTaggedApps,
} from './custom'
import { RootState, useRootSelector } from 'os/store'
import PDB from 'shared/pdb'

export enum CustomCategory {
  suggest = 'for-you',
}

export type CategoryOptions = {
  category: string
  defaultTitle?: string
  related?: RelatedCategory
  filter?: CategoryFilter
}

export const useAppCategory = ({
  category,
  defaultTitle = '',
  related,
  filter,
}: CategoryOptions) => {
  const register = useRootSelector((state: RootState) => state.page.register)
  const walletAddress = useRootSelector(
    (state: RootState) => state.wallet.address,
  )
  const [appIds, setAppIds] = useState<AppIds>([])
  const [verifiedRegister, setVerifiedRegister] = useState<SenReg>({})

  const verifyRegister = useCallback(async () => {
    const db = new PDB(walletAddress).createInstance('sentre')
    const localRegister: SenReg = { ...(await db.getItem('registers')) }
    const filteredRegister: SenReg = {}
    for (const i in register) {
      if (localRegister[i]) continue
      filteredRegister[i] = register[i]
    }
    setVerifiedRegister(filteredRegister)
  }, [register, walletAddress])

  const title = useMemo(() => {
    if (defaultTitle) return defaultTitle
    return category.replace(/\W/g, ' ')
  }, [category, defaultTitle])

  /**
   * find all app with CategoryData with case:
   * suggest-for-you: find all apps related to other apps
   * others: find all apps without tags
   * default: filter apps with tags
   */
  const findApps = useCallback(async () => {
    let appIds: AppIds = []

    switch (category) {
      case CustomCategory.suggest:
        appIds = findSuggestedApps(related || {}, verifiedRegister)
        break
      default:
        appIds = findTaggedApps(category, verifiedRegister)
        break
    }
    if (filter) appIds = filterApp(verifiedRegister, appIds, filter)
    return setAppIds(appIds)
  }, [category, filter, verifiedRegister, related])

  useEffect(() => {
    verifyRegister()
  }, [verifyRegister])

  useEffect(() => {
    findApps()
  }, [findApps])

  return {
    title,
    appIds,
  }
}
