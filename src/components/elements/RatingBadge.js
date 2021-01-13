import React from 'react'
import { Badge } from 'react-bootstrap'

const RatingBadge = ({ rating }) => {

  const setBackgroundColor = () => {
    switch(Math.round(rating)) {
    case 2:
      return '#dd7711'
    case 3:
      return '#dddd00'
    case 4:
      return '#77dd11'
    case 5:
      return '#00dd44'
    default:
      return 'red'
    }
  }

  return (
    <Badge style={{ backgroundColor: setBackgroundColor() }}>{rating}</Badge>
  )
}

export default RatingBadge