import React from 'react'
import moment from 'moment'
import { Card } from 'react-bootstrap'
import LinkToHackersPage from './elements/LinkToHackersPage'
import { Link } from 'react-router-dom'
import RatingBadge from './elements/RatingBadge'

const BookReview = ({ review }) =>
  <Card className='mb-3'>
    <Card.Body>
      <Card.Title>
        <Link to={`/books/${review.book.id}`}>
          <h3>{review.book.name}<span style={{ float: 'right' }}><RatingBadge rating={review.rating} /></span></h3>
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
          {moment(review.created).format('MMMM Do YYYY, hh:mm') + ' by '}
          <LinkToHackersPage hacker={review.reviewer} />
        </small>
      </Card.Text>
    </Card.Body>
  </Card>

export default BookReview