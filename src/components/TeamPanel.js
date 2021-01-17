import React from 'react'
import { ListGroup } from 'react-bootstrap'

const TeamPanel = ({ team, handleRemoveFromTeam }) =>
  <ListGroup id='team-list' variant='flush' className='text-center'>
    {team.map(employee =>
      <ListGroup.Item action key={employee.id} onClick={() => handleRemoveFromTeam(employee)}>
        {[employee.firstName, employee.lastName].join(' ')}
      </ListGroup.Item>
    )}
  </ListGroup>

export default TeamPanel