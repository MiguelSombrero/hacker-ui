import React from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { skillByKnowHow, employeeBySumOfSkillKnowHows } from '../functions/sorting'
import { Link } from 'react-router-dom'

const EmployeeSearchResult = ({ employees, filterContains, inProject, setInProject }) => {

  const handleClick = employee => {
    setInProject([...new Set(inProject.concat(employee))])
  }

  return (
    <ListGroup variant='flush'>
      {employees.sort(employeeBySumOfSkillKnowHows).map(employee =>
        <ListGroup.Item key={employee.id} action >
          <Row className='mb-2 pb-2'>
            <Col>
              <h3>{[employee.firstname, employee.lastname].join(' ')}</h3>    
            </Col>
          </Row>
          <Row className='mb-2 pb-2'>
            <Col>
              <Link to={`/employees/${employee.id}`}>
                Profiili
              </Link> 
            </Col>
            <Col>
              <p onClick={() => handleClick(employee)} >
                Valitse
              </p>
            </Col>
          </Row>
          <Row>
            <Col >
              {employee.skills.filter(filterContains).sort(skillByKnowHow).map(skill =>
                <p key={skill.id}>
                  {skill.name + ' ' + skill.knowHowMonths + ' kuukautta'}
                </p>
              )}
            </Col>
          </Row>
        </ListGroup.Item>
      )}
    </ListGroup>
  )
}
        
export default EmployeeSearchResult