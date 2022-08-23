import { Row, Col, Typography } from 'antd'

const View = () => {
  return (
    <Row gutter={[24, 24]} align="middle">
      <Col span={24}>
        <Typography.Title level={4}>Hello</Typography.Title>
      </Col>
    </Row>
  )
}

export default View
