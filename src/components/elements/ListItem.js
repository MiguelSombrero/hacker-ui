import React from 'react'
import { ListGroup } from 'react-bootstrap'
import RatingBadge from './RatingBadge'
import { Link } from 'react-router-dom'

const ListItem = ({ item, link }) => {

  const setBackgroundColor = (rating) => {
    switch(Math.round(rating)) {
    case 2:
      return '#ff9933'
    case 3:
      return '#ffff00'
    case 4:
      return '#99ff33'
    case 5:
      return '#1aff66'
    default:
      return '#ccffdd'
    }
  }

  return (
    <ListGroup.Item style={{ backgroundColor: setBackgroundColor(item.rating) }}>
      <Link to={link} style={{ color: 'black' }}>
        <h5>{item.name}</h5>
      </Link>
      <p>{'Arvosteluja ' + item.reviews.length}<span style={{ float: 'right' }}><RatingBadge rating={item.rating} /></span></p>
    </ListGroup.Item>
  )
}

export default ListItem