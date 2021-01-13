import React from 'react'
import moment from 'moment'
import { Card } from 'react-bootstrap'
import LinkToHackersPage from './elements/LinkToHackersPage'
import { Link } from 'react-router-dom'
import RatingBadge from './elements/RatingBadge'

const CourseReview = ({ review }) =>
  <Card className='mb-3'>
    <Card.Body>
      <Card.Title>
        <span style={{ float: 'right' }}><RatingBadge rating={review.rating} /></span>
        <Link to={`/courses/${review.course.id}`}>
          <h4>{review.course.name}</h4>
        </Link>
      </Card.Title>
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

export default CourseReview