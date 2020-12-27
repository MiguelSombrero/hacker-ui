import React from 'react'
import { withRouter, useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Employee = () => {
  const { employeeId } = useParams();

  const byId = employee =>
    employee.id === Number(employeeId)

  const employee = useSelector(state =>
    state.employees.find(byId)
  )

  return (
    <Row>
      <Col>
        {employee.firstname}
      </Col>
    </Row>
  )
}

export default withRouter(Employee)