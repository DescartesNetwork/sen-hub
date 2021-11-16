import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { Button, Card, Col, Row, Typography } from 'antd'
import AppIcon from 'os/components/appIcon'

import { RootState } from 'os/store'
import { installApp } from 'os/store/page.reducer'

const AppCardInfo = ({ appId }: { appId: string }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { register, appIds } = useSelector((state: RootState) => state.page)
  const appData = register[appId]

  const onInstall = (e: any) => {
    e.stopPropagation()
    return dispatch(installApp(appId))
  }

  const onOpen = (e: any, appId: string) => {
    e.stopPropagation()
    return history.push(`/app/${appId}`)
  }

  return (
    <Col span={24}>
      <Card
        bordered={false}
        className="glass"
        style={{
          borderRadius: 'unset',
        }}
        bodyStyle={{
          padding: '12px 16px',
        }}
      >
        <Row align="middle" gutter={[8, 8]}>
          <Col>
            <AppIcon size={32} appId={appId} name={false} />
          </Col>
          <Col flex="auto">
            <Typography.Title level={5}>{appData?.name}</Typography.Title>
            <Typography.Text type="secondary">
              {appData?.author.name}
            </Typography.Text>
          </Col>
          <Col>
            {appIds.includes(appId) ? (
              <Button
                type="ghost"
                size="small"
                style={{ padding: '1px 8px' }}
                onClick={(e) => onOpen(e, appId)}
              >
                Open
              </Button>
            ) : (
              <Button
                type="primary"
                onClick={onInstall}
                size="small"
                style={{ padding: '1px 8px' }}
              >
                Install
              </Button>
            )}
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default AppCardInfo
