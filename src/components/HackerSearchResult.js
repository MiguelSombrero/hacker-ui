import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { skillByKnowHow, employeeBySumOfSkillKnowHows } from '../functions/sorting'
import { roundTo1Dec } from '../functions/numbers'
import LinkToHackersPage from './elements/LinkToHackersPage'

const HackerSearchResult = ({ hackers, filterContains, handleAddToTeam }) => {

  return (
    <>
      {hackers.sort(employeeBySumOfSkillKnowHows).map(hacker =>
        <Card key={hacker.id} className='mb-2' style={{ maxWidth: '25rem' }}>
          <Card.Header>
            <Button style={{ float: 'right' }} variant='secondary' onClick={() => handleAddToTeam(hacker)} >
          Valitse
            </Button>
            <Card.Title>
              <LinkToHackersPage hacker={hacker} />
            </Card.Title>
          </Card.Header>
          <Card.Body>
            {hacker.skills.filter(filterContains).sort(skillByKnowHow).map(skill =>
              <Card.Text key={skill.id}>
                {skill.name}<span style={{ float:'right' }}>{roundTo1Dec(skill.knowHowMonths / 12) + ' vuotta'}</span>
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      )}
    </>
  )
}

export default HackerSearchResult