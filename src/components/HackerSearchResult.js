import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { skillByKnowHow, employeeBySumOfSkillKnowHows } from '../functions/sorting'
import { Link } from 'react-router-dom'
import { roundTo1Dec } from '../functions/numbers'

const HackerSearchResult = ({ employees, filterContains, handleAddToTeam }) =>
  <>
  <h2 className='mb-2 pb-2'>Hakutulokset</h2>
  {employees.sort(employeeBySumOfSkillKnowHows).map(employee =>
    <Card key={employee.id} className='mb-2' style={{ maxWidth: '25rem' }}>
      <Card.Header>
        <Button style={{ float: 'right' }} variant='secondary' onClick={() => handleAddToTeam(employee)} >
          Valitse
        </Button>
        <Card.Title>
          <Link to={`/hackers/${employee.id}`}>
            <h3>{[employee.firstname, employee.lastname].join(' ')}</h3>
          </Link> 
        </Card.Title>
      </Card.Header>
      <Card.Body>
        {employee.skills.filter(filterContains).sort(skillByKnowHow).map(skill =>
          <Card.Text key={skill.id}>
            {skill.name + ' ' + roundTo1Dec(skill.knowHowMonths / 12) + ' vuotta'}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  )}
  </>
        
export default HackerSearchResult