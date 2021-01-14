import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap'
import moment from 'moment'

const HackOMeter = ({ entries }) => {

  const setColor = (month) => {
    if (month.count < 20) {
      return '#33ff77'
    } else if (month.count < 40) {
      return '#1aff66'
    } else if (month.count < 60) {
      return '#00ff55'
    } else if (month.count < 80) {
      return '#00e64d'
    } else if (month.count < 100) {
      return '#00cc44'
    } else if (month.count < 120) {
      return '#00b33c'
    } else if (month.count < 140) {
      return '#009933'
    } else if (month.count < 160) {
      return '#00802b'
    }

    return '#006622'
  }

  return (
    <ListGroup id='hack-o-meter' variant='flush'>
      {entries.map(month =>
        <ListGroup.Item key={month.date} style={{ backgroundColor: `${setColor(month)}` }}>
          <h5>{moment(month.date).format('MMMM YYYY')}</h5>
          <p><span style={{ float: 'right' }}><Badge variant='secondary'>{month.count}</Badge></span></p>
        </ListGroup.Item>
      )}
    </ListGroup>
  )
}

export default HackOMeter