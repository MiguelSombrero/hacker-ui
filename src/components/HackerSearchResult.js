import React from 'react'
import { Row, Col, Card, Accordion, Button } from 'react-bootstrap'
import { skillByKnowHow, employeeBySumOfSkillKnowHows } from '../functions/sorting'
import { Link } from 'react-router-dom'
import { roundTo1Dec } from '../functions/numbers'

const HackerSearchResult = ({ employees, filterContains, inProject, setInProject }) => {

  const handleClick = employee => {
    setInProject([...new Set(inProject.concat(employee))])
  }

  const linkPanel = employee =>
    <Row className='mb-2 pb-2'>
      <Col>
        <Link to={`/hackers/${employee.id}`}>
          <button >
            Profiili
          </button>
        </Link> 
      </Col>
      <Col>
        <button onClick={() => handleClick(employee)} >
          Valitse
        </button>
      </Col>
    </Row>

  return (
    employees.sort(employeeBySumOfSkillKnowHows).map(employee =>
      <Accordion key={employee.id} className='mb-2'>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <Card.Title>{[employee.firstname, employee.lastname].join(' ')}</Card.Title>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              {linkPanel(employee)}
            </Accordion.Collapse>
          </Card.Header>
          <Card.Body>
            {employee.skills.filter(filterContains).sort(skillByKnowHow).map(skill =>
              <Card.Text key={skill.id}>
                {skill.name + ' ' + roundTo1Dec(skill.knowHowMonths / 12) + ' vuotta'}
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      </Accordion>
    )
  )
}
        
export default HackerSearchResult