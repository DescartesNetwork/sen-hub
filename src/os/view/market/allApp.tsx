import { Button, Col, Row, Typography } from 'antd'
import React from 'react'
import IonIcon from 'shared/ionicon'
import AppCard from './appCard'

export default function AllApp({
  title,
  appIds,
  onBack,
}: {
  title: string
  appIds: AppIds
  onBack: () => void
}) {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Button
          icon={<IonIcon name="arrow-back-outline"></IonIcon>}
          onClick={onBack}
        >
          Back
        </Button>
      </Col>
      <Col span={24}>
        <Typography.Title level={4}>{title}</Typography.Title>
      </Col>

      {appIds.map((appId) => (
        <Col lg={6} md={8} sm={12} xs={24}>
          <AppCard key={appId} appId={appId} />
        </Col>
      ))}
    </Row>
  )
}