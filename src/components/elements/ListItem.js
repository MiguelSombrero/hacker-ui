import React from 'react'
import { ListGroup, Row, Col } from 'react-bootstrap'
import RatingBadge from './RatingBadge'
import { Link } from 'react-router-dom'

const ListItem = ({ item, link }) =>
  <ListGroup.Item style={{ backgroundColor: 'whitesmoke' }}>
    <Row>
      <Col xs={12} md={10}>
        <Link to={link} style={{ color: 'black' }}>
          <h5>{item.name}</h5>
        </Link>
        <p style={{ color: 'blue' }}>{'Arvosteluja ' + item.reviews.length}</p>
      </Col>
      <Col xs={12} md={2}>
        <h4><RatingBadge rating={item.rating} /></h4>
      </Col>
    </Row>
  </ListGroup.Item>

export default ListItem