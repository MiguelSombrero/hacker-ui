import React from 'react'
import { withRouter, useParams } from 'react-router-dom'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { skillByKnowHow } from '../functions/sorting'
import { roundTo1Dec } from '../functions/numbers'
import Banner from './Banner'
import ReviewsAccordion from './ReviewsAccordion'
import ProjectsTable from './ProjectsTable'

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
        <Banner text={[hacker.firstName, hacker.lastName].join(' ')} />
      </Row>
      <Row>
        <Col xs={12} md={3} >
          <h4 className='text-center'>Arvostelut</h4>
          <ReviewsAccordion bookReviews={bookReviews} courseReviews={courseReviews} />
          <h4 className='text-center'>Osaaminen</h4>
          <ListGroup variant='flush'>
            {hacker && hacker.skills.sort(skillByKnowHow).map(skill =>
              <ListGroup.Item key={skill.id} >
                {skill.name}<span style={{ float:'right' }}>{roundTo1Dec(skill.knowHowMonths / 12) + ' vuotta'}</span>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
        <Col xs={12} md={9} >
          <h4 className='text-center'>Projektit</h4>
          <ProjectsTable projects={hacker.projects} />
        </Col>
      </Row>
    </>
  )
}

export default withRouter(Hacker)