import React from 'react'
import { ListGroup } from 'react-bootstrap'
import RatingBadge from './RatingBadge'
import { Link } from 'react-router-dom'

const ListItem = ({ item, link }) =>
  <ListGroup.Item style={{ backgroundColor: 'whitesmoke' }}>
    <h4 style={{ float: 'right' }} ><RatingBadge rating={item.rating} /></h4>
    <Link to={link} style={{ color: 'black' }}>
      <h5>{item.name}</h5>
    </Link>
    <p style={{ color: 'blue' }}>{'Arvosteluja ' + item.reviews.length}</p>
  </ListGroup.Item>

export default ListItem