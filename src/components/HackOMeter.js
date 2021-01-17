import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap'
import moment from 'moment'

const HackOMeter = ({ month }) => {

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
    <ListGroup.Item style={{ backgroundColor: `${setColor(month)}` }}>
      <p>
        {moment(month.date).format('MMMM YYYY')}<span style={{ float: 'right' }}><Badge variant='secondary'>{month.count}</Badge></span>
      </p>
    </ListGroup.Item>
  )
}

export default HackOMeter