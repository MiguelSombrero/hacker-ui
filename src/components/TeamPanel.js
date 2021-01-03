import React from 'react'
import { skillByMaxKnowHow } from '../functions/reducers'
import { roundTo1Dec } from '../functions/numbers'
import { ListGroup } from 'react-bootstrap'

const TeamPanel = ({ team, handleRemoveFromTeam }) => {

  const maxSkills = Object.values(team
    .map(employee => employee.skills).flat()
      .reduce(skillByMaxKnowHow, {}))
    
  return (
    <>
    <h2 className='mb-2 pb-2'>Valittu tiimi</h2>
    <ListGroup variant='flush'>
      {team.map(employee =>
      <ListGroup.Item action key={employee.id} onClick={() => handleRemoveFromTeam(employee)} >
        <h3>{[employee.firstname, employee.lastname].join(' ')}</h3>   
      </ListGroup.Item>
      )}
    </ListGroup>
    <h3 className='mb-2 pb-2'>Tiimin osaaminen</h3>
      {maxSkills.map((skill, id) =>
        <p key={id}>
          {skill.name + ' ' + roundTo1Dec(skill.knowHowMonths / 12) + ' vuotta'}
        </p>
      )}
    </>
  )
}

export default TeamPanel