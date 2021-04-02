import { Row, Col, Button } from 'antd';


function Question({ key, questions, title }) {

  const style = { background: '#0092ff', padding: '8px 0' };

  return (
    <Row gutter={[8, 24]} >
      <Col className="que" span={4}>
        {title}
      </Col>
      {
        questions.map(el =>
          <Col flex="auto">
            <Button className="que-btn" size="large" ghost="true" block>{el.points}</Button>
          </Col>
        )
      }

    </Row>
  )
}

export default Question

