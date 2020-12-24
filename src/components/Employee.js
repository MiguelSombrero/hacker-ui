import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Employee = ({ employee }) =>
  <Row>
    <Col>
      {employee.firstname}
    </Col>
  </Row>

export default Employee