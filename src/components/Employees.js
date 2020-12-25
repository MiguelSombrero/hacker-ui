import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Form, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Employee from './Employee'

const Employees = () => {
  const [filter, setFilter] = useState('')

  const employees = useSelector(state => state.employees)

  const hasSkill = employee =>
    employee.skills.filter(skill =>
      skill.name.toLowerCase().includes(filter.toLowerCase())).length > 0

  const employeesToShow = employees.filter(employee => hasSkill(employee))

  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
    <Row>
      <Col>
        <Form inline className='justify-content-center p-3 m-3'>
          <Form.Control
            onChange={handleChange}
            name='filter'
            type ='text'
            placeholder='filter employees ...'>
          </Form.Control>
        </Form>
      </Col>
    </Row>
    <Row >
      <Col>
        <ListGroup variant='flush' className='text-center'>
          {employeesToShow && employeesToShow.map(employee =>
          <ListGroup.Item action key={employee.firstname} >
            <Row>
              <Col>
                <Link to={{ pathname: `/employees/${employee.lastname}`, state: { employee: {...employee} } }}>
                  <h3>{employee.firstname}</h3>
                </Link>    
              </Col>
            </Row>
          </ListGroup.Item>
          )}
        </ListGroup>
      </Col>
    </Row>
    </>
  )
}

export default Employees