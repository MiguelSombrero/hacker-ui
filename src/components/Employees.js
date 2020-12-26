import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Form, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Employee from './Employee'

const Employees = () => {
  const [filters, setFilters] = useState([])

  console.log(filters)

  const filterContains = skill =>
    filters.some(filter => skill.name.toLowerCase() === filter.toLowerCase())

  const hasAllOfSkills = employee =>
    filters.every(filter => employee.skills.some(skill =>
      skill.name.toLowerCase() === filter.toLowerCase()))

  const employees = useSelector(state =>
    state.employees.filter(hasAllOfSkills))

  const handleChange = (event) => {
    const filters = event.target.value.split(' ')
    setFilters(filters[0] === '' ? [] : filters)
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
          {employees && employees.map(employee =>
          <ListGroup.Item key={employee.firstname.concat(employee.lastname)} >
            <Row>
              <Col>
                <Link to={{ pathname: `/employees/${employee.firstname.concat(employee.lastname)}`, state: { employee: {...employee} } }}>
                  <h3>{[employee.firstname, employee.lastname].join(' ')}</h3>
                </Link>    
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={{ span: 4, offset: 4 }} >
                {employee.skills.filter(filterContains).map(skill =>
                <p key={employee.firstname.concat(employee.lastname).concat(skill.name)}>
                  {skill.name + ' ' + skill.knowHowMonths + ' kuukautta'}
                </p>
                )}
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