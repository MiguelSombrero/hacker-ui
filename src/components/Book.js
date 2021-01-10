import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup } from 'react-bootstrap'
import RatingBadge from './elements/RatingBadge'

const Book = ({ book }) =>
  <ListGroup.Item action key={book.id} >
    <Row>
      <Col xs={12} md={8}>
        <Link to={`/books/${book.id}`}>
          <h3>{book.name + ' (' + book.type.name + ')'}</h3>
        </Link>
        <p>{book.authors}</p>
      </Col>
      <Col xs={12} md={4}>
        <h4><RatingBadge rating={book.rating} /></h4>
        <p className='text-muted'>{book.reviews.length + ' arviota'}</p>
      </Col>
    </Row>
  </ListGroup.Item>

export default withRouter(Book)