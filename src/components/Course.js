import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup } from 'react-bootstrap'
import RatingBadge from './elements/RatingBadge'

const Course = ({ course }) =>
  <ListGroup.Item action key={course.id} >
    <Row>
      <Col xs={12} md={8}>
        <Link to={`/courses/${course.id}`}>
          <h4>{course.name}</h4>
        </Link>
      </Col>
      <Col xs={12} md={4}>
        <h5><RatingBadge rating={course.rating} /></h5>
        <p className='text-muted'>{course.reviews.length + ' arviota'}</p>
      </Col>
    </Row>
  </ListGroup.Item>

export default withRouter(Course)