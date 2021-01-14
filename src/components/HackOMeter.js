import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap'
import moment from 'moment'

const HackOMeter = ({ entries }) => {

  const setColor = (month) => {
    if (month.count < 20) {
      return '#ffebe6'
    } else if (month.count < 40) {
      return '#ffd6cc'
    } else if (month.count < 60) {
      return '#fff5e6'
    } else if (month.count < 80) {
      return '#ffebcc'
    } else if (month.count < 100) {
      return '#ffffe6'
    } else if (month.count < 120) {
      return '#ffffcc'
    } else if (month.count < 140) {
      return '#e6ffee'
    } else if (month.count < 160) {
      return '#ccffdd'
    }

    return '#006622'
  }

  return (
    <ListGroup id='hack-o-meter' variant='flush'>
      {entries.map(month =>
        <ListGroup.Item key={month.date} style={{ backgroundColor: `${setColor(month)}` }}>
          <h5>
            {moment(month.date).format('MMMM YYYY')}<span style={{ float: 'right' }}><Badge variant='secondary'>{month.count}</Badge></span>
          </h5>
        </ListGroup.Item>
      )}
    </ListGroup>
  )
}

export default HackOMeter