import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Card, Badge } from 'react-bootstrap'

const Review = ({ review }) =>
  <Card className='mb-3'>
    <Card.Body>
      <Card.Title>
        <Link to={`/books/${review.book.id}`}>
          <h1>{review.book.name}<Badge style={{ float: 'right' }} variant="warning">{review.rating}</Badge></h1>
        </Link>
      </Card.Title>
      <Card.Subtitle className='text-muted mb-2 pb-2'>       
        {review.book.authors}
      </Card.Subtitle>
      <Card.Text>
        {review.review}
      </Card.Text>
      <Card.Text>
        <small className="text-muted">
          {moment(review.created).format('MMMM Do YYYY, hh:mm') + ' by ' + review.reviewer.firstname + ' ' + review.reviewer.lastname}
        </small>
      </Card.Text>
    </Card.Body>
  </Card>

export default Review