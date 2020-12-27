import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFilters } from '../hooks'
import { Row, Col, Form, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Search from './Search'

const Employees = () => {
  const [filters, onChange] = useFilters()

  const filterContains = skill =>
    filters.some(filter => skill.name.toLowerCase() === filter.toLowerCase())

  const hasAllOfSkills = employee =>
    filters.every(filter => employee.skills.some(skill =>
      skill.name.toLowerCase() === filter.toLowerCase()))

  const employees = useSelector(state =>
    state.employees.filter(hasAllOfSkills))

  return (
    <>
    <Row>
      <Col>
        <Search
          onChange={onChange}
          placeholder='filter employees ...'
        />
      </Col>
    </Row>
    <Row >
      <Col>
        <ListGroup variant='flush' className='text-center'>
          {employees && employees.map(employee =>
          <ListGroup.Item key={employee.id} >
            <Row>
              <Col>
                <Link to={`/employees/${employee.id}`}>
                  <h3>{[employee.firstname, employee.lastname].join(' ')}</h3>
                </Link>    
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={{ span: 4, offset: 4 }} >
                {employee.skills.filter(filterContains).map(skill =>
                <p key={skill.id}>
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