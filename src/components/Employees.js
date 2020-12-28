import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFilters } from '../hooks'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { bySkillMaxKnowHow } from '../functions/reducers'
import Search from './Search'
import EmployeeSearchResult from './EmployeeSearchResult'

const Employees = () => {
  const [filters, onChange] = useFilters()
  const [inProject, setInProject] = useState([])

  const employees = useSelector(state => state.employees)

  const filterContains = skill =>
    filters.some(filter => skill.name.toLowerCase() === filter.toLowerCase())

  const hasAllOfSkills = employee =>
    filters.every(filter => employee.skills.some(skill =>
      skill.name.toLowerCase() === filter.toLowerCase()))

  const maxSkills =
    Object.values(inProject.map(employee => employee.skills).flat()
      .reduce(bySkillMaxKnowHow, {}))

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
    <Row className='text-center'>
      <Col xs={12} md={4} >
        <h3>Haku</h3>
        <EmployeeSearchResult
          employees={employees.filter(hasAllOfSkills)}
          inProject={inProject}
          setInProject={setInProject}
          filterContains={filterContains}
        />
      </Col>
      <Col xs={12} md={4}>
        <h3>Hakkerit</h3>
        <ListGroup variant='flush'>
          {inProject.map(employee =>
          <ListGroup.Item action key={employee.id} >
            <h3>{[employee.firstname, employee.lastname].join(' ')}</h3>   
          </ListGroup.Item>
          )}
        </ListGroup>
      </Col>
      <Col xs={12} md={4} >
        <h3>Osaaminen</h3>
          {maxSkills.map((skill, id) =>
            <p key={id}>
              {skill.name + ' ' + skill.knowHowMonths + ' kuukautta'}
            </p>
          )}
      </Col>
    </Row>
    </>
  )
}

export default Employees