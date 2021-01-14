import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { skillByKnowHow } from '../functions/sorting'
import { roundTo1Dec } from '../functions/numbers'
import LinkToHackersPage from './elements/LinkToHackersPage'
import { projectByNotEnded } from '../functions/filters'

const HackerSearchResult = ({ hacker, skills, handleAddToTeam }) => {

  const currentProjects = hacker.projects
    .filter(projectByNotEnded)

  const projectsList = () =>
    <p>
      <small style={{ color: 'red' }}>Aktiiviset projektit: </small>
      <small>{currentProjects.map(project => project.name).join(', ')}</small>
    </p>

  return (
    <Card className='mb-2' style={{ maxWidth: '25rem' }}>
      <Card.Header>
        <Button style={{ float: 'right' }} variant='secondary' onClick={() => handleAddToTeam(hacker)} >
          Valitse
        </Button>
        <Card.Title>
          <LinkToHackersPage hacker={hacker} />
        </Card.Title>
        <Card.Subtitle className='mt-2'>
          {currentProjects.length > 0
            ? projectsList()
            : <small style={{ color: 'green' }}>Ei aktiivista projektia</small>
          }
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        {skills.sort(skillByKnowHow).map(skill =>
          <Card.Text key={skill.id}>
            {skill.name}<span style={{ float:'right' }}>{roundTo1Dec(skill.knowHowMonths / 12) + ' vuotta'}</span>
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  )
}

export default HackerSearchResult