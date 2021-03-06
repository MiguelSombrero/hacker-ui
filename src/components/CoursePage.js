import React from 'react'
import { Row, Col, Badge, Card, CardColumns } from 'react-bootstrap'
import { withRouter, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LinkToHackersPage from './elements/LinkToHackersPage'
import moment from 'moment'

const CoursePage = () => {
  const { courseId } = useParams()

  const byId = course => course.id === Number(courseId)

  const course = useSelector(state => state.studies.courses.find(byId))

  if (!course) {
    return null
  }

  return (
    <>
      <Row className='m-2 p-2'>
        <Col className='text-center' xs={12} md={{ span: 8, offset: 2 }}>
          <h1><Badge style={{ float: 'right' }} variant="warning">{course.rating}</Badge></h1>
          <h1>{course.name}</h1>
        </Col>
      </Row>
      <Row>
        <Col className='text-center' xs={12} md={2} >
        </Col>
        <Col xs={12} md={8} >
          <CardColumns>
            {course.reviews.map(review =>
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
                  <Card.Text>
                    <small className="text-muted">
                      {moment(review.created).format('MMMM Do YYYY, hh:mm')}
                    </small>
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

export default withRouter(CoursePage)