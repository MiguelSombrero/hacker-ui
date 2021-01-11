import React from 'react'
import { ListGroup } from 'react-bootstrap'

const TeamPanel = ({ team, handleRemoveFromTeam }) => {

  const teamList = () =>
    <ListGroup id='team-list' variant='flush' className='text-center'>
      {team.map(employee =>
        <ListGroup.Item action key={employee.id} onClick={() => handleRemoveFromTeam(employee)}>
          {[employee.firstname, employee.lastname].join(' ')}
        </ListGroup.Item>
      )}
    </ListGroup>

  return (
    <>
      <h2 className='mb-2 pb-2 text-center'>Tiimissä<span style={{ color: 'green' }}>{' ' + team.length + ' '}</span> hakkeria</h2>

      {team.length > 0
        ? teamList()
        : <p className='text-center'>Ei näy kettään</p>
      }
    </>
  )
}

export default TeamPanel