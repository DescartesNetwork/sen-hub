import { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Card, Col, Row, Typography } from 'antd'
import AppIcon from 'os/components/appIcon'

import { RootState, useRootSelector } from 'os/store'
import PDB from 'shared/pdb'

const AllApps = () => {
  const walletAddress = useRootSelector(
    (state: RootState) => state.wallet.address,
  )
  const register = useRootSelector((state: RootState) => state.page.register)
  const history = useHistory()
  const [appIds, setAppIds] = useState<string[]>([])

  const verifyApp = useCallback(async () => {
    const db = new PDB(walletAddress).createInstance('sentre')
    const localRegister: SenReg = { ...(await db.getItem('registers')) }
    const verifiedAppIds = Object.keys(register).filter(
      (value) => !localRegister[value],
    )
    setAppIds(verifiedAppIds)
  }, [register, walletAddress])

  useEffect(() => {
    verifyApp()
  }, [verifyApp])

  return (
    <Card bordered={false} className="glass" bodyStyle={{ padding: 32 }}>
      <Row gutter={[24, 32]}>
        <Col span={24}>
          <Row gutter={[24, 24]} justify="center">
            <Col>
              <Typography.Title type="secondary" level={3}>
                Let's explore the Store
              </Typography.Title>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[24, 24]} justify="center">
            {appIds.map((appId, i) => (
              <Col key={i}>
                <AppIcon
                  appId={appId}
                  size={72}
                  onClick={() => history.push(`/store/${appId}`)}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default AllApps
