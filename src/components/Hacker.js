import React from 'react'
import { withRouter, useParams } from 'react-router-dom'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { skillByKnowHow } from '../functions/sorting'
import { roundTo1Dec } from '../functions/numbers'
import Banner from './Banner'

const Hacker = () => {
  const { hackerId } = useParams()

  const hackerById = hacker => hacker.id === Number(hackerId)

  const reviewById = review => review.reviewer.id === Number(hackerId)

  const hacker = useSelector(state => state.hackers.find(hackerById))

  const bookReviews = useSelector(state => state.studies.bookReviews
    .filter(reviewById))

  const courseReviews = useSelector(state => state.studies.courseReviews
    .filter(reviewById))

  return (
    <>
      <Row>
        <Banner text={[hacker.firstname, hacker.lastname].join(' ')} />
      </Row>
      <Row>
        <Col xs={12} md={3} >
          <h4 className='text-center'>Osaaminen</h4>
          <ListGroup variant='flush'>
            {hacker && hacker.skills.sort(skillByKnowHow).map(skill =>
              <ListGroup.Item key={skill.id} >
                {skill.name}<span style={{ float:'right' }}>{roundTo1Dec(skill.knowHowMonths / 12) + ' vuotta'}</span>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
        <Col xs={12} md={3} >
          <h4>Kurssi-arvostelut</h4>
          <ListGroup variant='flush'>
            {courseReviews && courseReviews.map(review =>
              <ListGroup.Item key={review.id} >
                {review.course.name}
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
        <Col xs={12} md={3} >
          <h4>Kirja-arvostelut</h4>
          <ListGroup variant='flush'>
            {bookReviews && bookReviews.map(review =>
              <ListGroup.Item key={review.id} >
                {review.book.name}
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default withRouter(Hacker)