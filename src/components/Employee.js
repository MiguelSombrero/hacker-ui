import React from 'react'
import { withRouter, useParams } from 'react-router-dom'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { skillByKnowHow } from '../functions/sorting'
import { roundTo1Dec } from '../functions/numbers'

const Employee = () => {
  const { hackerId } = useParams();

  const byId = employee =>
    employee.id === Number(hackerId)

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
            {skill.name + ' ' + roundTo1Dec(skill.knowHowMonths / 12) + ' vuotta'}
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