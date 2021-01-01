import React from 'react'
import { withRouter, useParams } from 'react-router-dom'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { skillByKnowHow } from '../functions/sorting'

const Employee = () => {
  const { employeeId } = useParams();

  const byId = employee =>
    employee.id === Number(employeeId)

  const employee = useSelector(state =>
    state.employees.find(byId)
  )

  return (
    <>
    <Row>
        <Col className='text-center' xs={12} md={{ span: 8, offset: 2 }}>
          <h1>{employee.firstname + ' ' + employee.lastname}</h1>
        </Col>
    </Row>
    <Row>
      <Col className='text-center' xs={12} md={3} >
        <h4>Osaaminen</h4>
        <ListGroup variant='flush'>
          {employee.skills.sort(skillByKnowHow).map(skill =>
          <ListGroup.Item key={skill.id} >
            {skill.name + ' ' + skill.knowHowMonths}
          </ListGroup.Item>
          )}
        </ListGroup>
      </Col>
      <Col xs={12} md={6} >
        
      </Col>
      <Col xs={12} md={3} >
        
      </Col>
    </Row>
  </>
  )
}

export default withRouter(Employee)