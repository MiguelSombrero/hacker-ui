import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFilters } from '../hooks'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { skillByMaxKnowHow } from '../functions/reducers'
import Search from './Search'
import EmployeeSearchResult from './EmployeeSearchResult'

const Employees = () => {
  const [filters, onChange] = useFilters()
  const [inProject, setInProject] = useState([])

  const employees = useSelector(state => state.employees)

  const filterContains = skill =>
    filters.length === 0 || filters.some(filter => skill.name.toLowerCase() === filter.toLowerCase())

  const hasAllOfSkills = employee =>
    filters.every(filter => employee.skills.some(skill =>
      skill.name.toLowerCase() === filter.toLowerCase()))

  const maxSkills =
    Object.values(inProject.map(employee => employee.skills).flat()
      .reduce(skillByMaxKnowHow, {}))

  const employeeToShow = employees.filter(hasAllOfSkills)

  const handleRemoveHacker = employee => {
    setInProject(inProject.filter(e => e.id !== employee.id))
  }

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
        <h2 className='mb-2 pb-2'>Hakutulokset</h2>
        <EmployeeSearchResult
          employees={employeeToShow}
          inProject={inProject}
          setInProject={setInProject}
          filterContains={filterContains}
        />
      </Col>
      <Col xs={12} md={4}>
        <h2 className='mb-2 pb-2'>Valittu tiimi</h2>
        <ListGroup variant='flush'>
          {inProject.map(employee =>
          <ListGroup.Item action key={employee.id} onClick={() => handleRemoveHacker(employee)} >
            <h3>{[employee.firstname, employee.lastname].join(' ')}</h3>   
          </ListGroup.Item>
          )}
        </ListGroup>
      </Col>
      <Col xs={12} md={4} >
        <h2 className='mb-2 pb-2'>Tiimin osaaminen</h2>
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