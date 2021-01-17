import React from 'react'
import { withRouter } from 'react-router-dom'
import { Row, Col, ListGroup } from 'react-bootstrap'
import RatingBadge from './elements/RatingBadge'
import LinkToBooksPage from './elements/LinkToBooksPage'

const Book = ({ book }) =>
  <ListGroup.Item action key={book.id} >
    <Row>
      <Col xs={12} md={8}>
        <h4><LinkToBooksPage book={book} /></h4>
        <p>{book.authors}</p>
      </Col>
      <Col xs={12} md={4}>
        <h5><RatingBadge rating={book.rating} /></h5>
        <p className='text-muted'>{book.reviews.length + ' arviota'}</p>
      </Col>
    </Row>
  </ListGroup.Item>

export default withRouter(Book)