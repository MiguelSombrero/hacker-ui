import React from 'react'
import { ListGroup } from 'react-bootstrap'
import moment from 'moment'

const HackOMeter = ({ entries }) => {

  const setColor = (month) => {
    if (month.count < 30) {
      return '#4dff88'
    } else if (month.count < 60) {
      return '#1aff66'
    } else if (month.count < 90) {
      return '#00e64d'
    } else if (month.count < 120) {
      return '#00b33c'
    }

    return '#00802b'
  }

  return (
    <ListGroup variant='flush'>
      {entries.map(month =>
        <ListGroup.Item key={month.date} style={{ backgroundColor: `${setColor(month)}` }}>
          <h5>{moment(month.date).format('MMMM YYYY')}</h5>
          <p>{month.count + ' arviota'}</p>
        </ListGroup.Item>
      )}
    </ListGroup>
  )
}

export default HackOMeter