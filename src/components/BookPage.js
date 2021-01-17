import React from 'react'
import { Row, Col, Card, CardColumns } from 'react-bootstrap'
import { withRouter, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LinkToHackersPage from './elements/LinkToHackersPage'
import RatingBadge from './elements/RatingBadge'

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
          <h1 style={{ float: 'right' }} ><RatingBadge rating={book.rating} /></h1>
          <h1>{book.name}</h1>
          <p>{book.authors}</p>
        </Col>
      </Row>
      <Row style={{ backgroundColor: 'whitesmoke' }}>
        <Col xs={12} md={{ span: 10, offset: 1 }} className='p-2' >
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
      </Row>
    </>
  )
}

export default withRouter(BookPage)