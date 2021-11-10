import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { account } from '@senswap/sen-js'

import { Row, Col, Button, Space } from 'antd'
import IonIcon from 'shared/ionicon'
import AppReadme from 'os/components/appReadme'
import HeroPanel from './heroPanel'

import { RootDispatch, RootState } from 'os/store'
import { installApp, uninstallApp } from 'os/store/page.reducer'
import AppCategory from '../appCategory'

const AppViewer = () => {
  const history = useHistory()
  const dispatch = useDispatch<RootDispatch>()
  const { appId } = useParams<{ appId: string }>()
  const { address } = useSelector((state: RootState) => state.wallet)
  const { appIds } = useSelector((state: RootState) => state.page)

  const installed = useMemo(() => {
    return account.isAddress(address) && appIds.includes(appId)
  }, [address, appIds, appId])
  const to = () => history.push(`/app/${appId}`)
  const onBack = () => history.goBack()

  return (
    <Row gutter={[24, 24]}>
      <Col xs={{ span: 24 }} md={{ span: 8 }}>
        <HeroPanel appId={appId} />
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 16 }}>
        <Row gutter={[24, 24]}>
          <Col flex="auto">
            <Button
              className="contained"
              icon={<IonIcon name="arrow-back-outline" />}
              onClick={onBack}
            >
              Back
            </Button>
          </Col>
          <Col>
            {installed ? (
              <Space>
                <Button
                  icon={<IonIcon name="trash-outline" />}
                  onClick={() => dispatch(uninstallApp(appId))}
                >
                  Uninstall
                </Button>
                <Button type="primary" onClick={to}>
                  Open
                </Button>
              </Space>
            ) : (
              <Button
                type="primary"
                icon={<IonIcon name="cloud-download-outline" />}
                onClick={() => dispatch(installApp(appId))}
              >
                Install
              </Button>
            )}
          </Col>
          <Col span={24}>
            <AppReadme appId={appId} />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
      <AppCategory
          onSeeAll={()=>{}}
          title="Top dapps"
          category="top-dapps"
        />
        </Col>
    </Row>
  )
}

export default AppViewer
