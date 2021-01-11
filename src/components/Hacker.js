import React from 'react'
import { withRouter, useParams } from 'react-router-dom'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { skillByKnowHow } from '../functions/sorting'
import { roundTo1Dec } from '../functions/numbers'

const Hacker = () => {
  const { hackerId } = useParams()

  const byId = hacker => hacker.id === Number(hackerId)

  const hacker = useSelector(state => state.hackers.find(byId))

  const reviews = useSelector(state => state.studies.bookReviews
    .filter(review => review.reviewer.id === Number(hackerId)))

  return (
    <>
      <Row>
        <Col className='text-center'>
          <h1>{hacker && hacker.firstname + ' ' + hacker.lastname}</h1>
        </Col>
      </Row>
      <Row>
        <Col className='text-center' xs={12} md={3} >
          <h4>Osaaminen</h4>
          <ListGroup variant='flush'>
            {hacker && hacker.skills.sort(skillByKnowHow).map(skill =>
              <ListGroup.Item key={skill.id} >
                {skill.name + ' ' + roundTo1Dec(skill.knowHowMonths / 12) + ' vuotta'}
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
        <Col xs={12} md={6} >
        </Col>
        <Col xs={12} md={3} >
          <h4>Arvostelut</h4>
          <ListGroup variant='flush'>
            {reviews && reviews.map(review =>
              <ListGroup.Item key={review.id} >
                {review.book && review.book.name} {review.course && review.course.name}
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default withRouter(Hacker)