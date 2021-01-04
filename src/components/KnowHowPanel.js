import React from 'react'
import { skillByMaxKnowHow } from '../functions/reducers'
import { skillByKnowHow } from '../functions/sorting'
import { roundTo1Dec } from '../functions/numbers'
import { ListGroup } from 'react-bootstrap'

const KnowHowPanel = ({ team }) => {

  const maxSkills = Object.values(team
    .map(hacker => hacker.skills).flat()
      .reduce(skillByMaxKnowHow, {}))
    
  const knowHowList = () =>
    <ListGroup id='knowhow-list' variant='flush' className='text-center'>
      {maxSkills.sort(skillByKnowHow).map(skill =>
        <ListGroup.Item action key={skill.id}>
          {skill.name + ' ' + roundTo1Dec(skill.knowHowMonths / 12) + ' vuotta'}
        </ListGroup.Item>
      )}
    </ListGroup>

  return (
    <>
      <h2 className='mb-2 pb-2 text-center'>Tiimin osaaminen</h2>
      
      {team.length > 0
        ? knowHowList()
        : <p className='text-center'>Ei ossaa mittään</p>
      }
    </>
  )
}

export default KnowHowPanel