import React from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { byKnowHow, bySumOfKnowHows } from '../functions/sorting'
import { Link } from 'react-router-dom'

const EmployeeSearchResult = ({ employees, filterContains, inProject, setInProject }) => {

  const handleClick = employee => {
    setInProject(inProject.concat(employee))
  }

  return (
    <ListGroup variant='flush'>
      {employees.sort(bySumOfKnowHows).map(employee =>
        <ListGroup.Item key={employee.id} action onClick={() => handleClick(employee)} >
          <Row>
            <Col>
              <Link to={`/employees/${employee.id}`}>
                <h3>{[employee.firstname, employee.lastname].join(' ')}</h3>
              </Link>    
            </Col>
          </Row>
          <Row>
            <Col >
              {employee.skills.filter(filterContains).sort(byKnowHow).map(skill =>
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