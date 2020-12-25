import React from 'react'
import { Row, Col, Badge, Card, CardColumns } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

const Book = ({ location }) => {
  const book = location.state.book

  const authors = book.authors.map(author =>
    author.lastname + ' ' + author.firstname).join(', ')

  return (
    <>
    <Row>
        <Col className='text-center' xs={12} md={{ span: 8, offset: 2 }}>
          <h1><Badge style={{ float: 'right' }} variant="warning">{book.rating}</Badge></h1>
          <h1>{book.name}</h1>
          <p>{authors}</p>
        </Col>
    </Row>
    <Row>
      <Col className='text-center' xs={12} md={2} >
      </Col>
      <Col xs={12} md={8} >
        <CardColumns>
          {book.reviews.map(review =>
          <Card key={review.review} >
            <Card.Body>
              <Card.Title>
                {review.reviewer.firstname + ' ' + review.reviewer.lastname}
                <Badge variant="warning" style={{ float: 'right' }}>{review.rating}</Badge>
              </Card.Title>
              <Card.Text>
                {review.review}
              </Card.Text>
            </Card.Body>
          </Card>
          )}
        </CardColumns>
      </Col>
      <Col xs={12} md={2} >
        <p></p>
      </Col>
    </Row>
  </>
  )
}

export default withRouter(Book)