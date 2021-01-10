import React from 'react'
import { Row, Col, Badge, Card, CardColumns } from 'react-bootstrap'
import { withRouter, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LinkToHackersPage from './elements/LinkToHackersPage'

const BookPage = () => {
  const { bookId } = useParams()

  const byId = book => book.id === Number(bookId)

  const book = useSelector(state => state.studies.books.find(byId))

  if (!book) {
    return null
  }

  return (
    <>
      <Row className='m-2 p-2'>
        <Col className='text-center' xs={12} md={{ span: 8, offset: 2 }}>
          <h1><Badge style={{ float: 'right' }} variant="warning">{book.rating}</Badge></h1>
          <h1>{book.name}</h1>
          <p>{book.authors}</p>
        </Col>
      </Row>
      <Row>
        <Col className='text-center' xs={12} md={2} >
        </Col>
        <Col xs={12} md={8} >
          <CardColumns>
            {book.reviews.map(review =>
              <Card key={review.id} >
                <Card.Body>
                  <Card.Title>
                    <LinkToHackersPage hacker={review.reviewer} />
                  </Card.Title>
                  <Card.Text>
                    {review.review}
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">{review.rating + ' / 5'}</small>
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

export default withRouter(BookPage)