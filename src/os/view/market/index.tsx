import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Row, Col } from 'antd'
import AppCategory from './appCategory'
import AllApp from './allApp'
import SearchEngine from './searchEngine'
import BannerTop from './bannerTop'
import BannerBottom from './bannerBottom'

import { setLoading } from 'os/store/search.reducer'
import { RootDispatch, RootState } from 'os/store'

let searching: NodeJS.Timeout

const Market = () => {
  const dispatch = useDispatch<RootDispatch>()
  const { value } = useSelector((state: RootState) => state.search)
  const { register } = useSelector((state: RootState) => state.page)

  const [viewInfo, setViewInfo] = useState<{
    isOpen: boolean
    appIds: AppIds
    title: string
  }>({
    isOpen: false,
    appIds: [],
    title: '',
  })

  const onSearch = useCallback(async () => {
    const engine = new SearchEngine(register)
    await dispatch(setLoading(true))
    if (searching) clearTimeout(searching)
    if (!value) await dispatch(setLoading(false))

    searching = setTimeout(async () => {
      const appIds = engine.search(value)
      await setViewInfo({
        isOpen: !!value,
        appIds: appIds,
        title: 'Search Results',
      })
      await dispatch(setLoading(false))
      return window.scrollTo(0, 0)
    }, 1000)
  }, [value, dispatch, register])

  useEffect(() => {
    onSearch()
  }, [onSearch])

  const onView = (appIds: AppIds, title: string) => {
    return setViewInfo({ isOpen: true, appIds, title })
  }
  const onBack = () => {
    return setViewInfo({ isOpen: false, appIds: [], title: '' })
  }

  if (viewInfo.isOpen) return <AllApp {...viewInfo} onBack={onBack} />

  return (
    <Row gutter={[16, 48]}>
      <Col span={24}>
        <BannerTop />
      </Col>
      <Col span={24}>
        <AppCategory
          onSeeAll={onView}
          title="Suggested for you"
          category="suggest"
        />
      </Col>
      <Col span={24}>
        <AppCategory onSeeAll={onView} title="Top dapps" category="top-dapps" />
      </Col>
      <Col span={24}>
        <AppCategory onSeeAll={onView} title="Other" category="other" />
      </Col>
      <Col span={24}>
        <BannerBottom />
      </Col>
    </Row>
  )
}

export default Market
