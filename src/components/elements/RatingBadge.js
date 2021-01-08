import React from 'react'
import { Badge } from 'react-bootstrap'

const RatingBadge = ({ rating }) => {

  const setVariant = () => {
    switch(Math.round(rating)) {
    case 2:
      return 'danger'
    case 3:
      return 'warning'
    case 4:
      return 'warning'
    case 5:
      return 'success'
    default:
      return 'danger'
    }
  }

  return (
    <Badge variant={setVariant()}>{rating}</Badge>
  )
}

export default RatingBadge