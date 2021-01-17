import React from 'react'
import { withRouter, useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Banner from './Banner'
import Hackcordion from './Hackcordion'
import ProjectsTable from './ProjectsTable'

const Hacker = () => {
  const { hackerId } = useParams()

  const hackerById = hacker => hacker.id === Number(hackerId)

  const reviewByReviewerId = review => review.reviewer.id === Number(hackerId)

  const hacker = useSelector(state => state.hackers.find(hackerById))

  const bookReviews = useSelector(state => state.studies.bookReviews
    .filter(reviewByReviewerId))

  const courseReviews = useSelector(state => state.studies.courseReviews
    .filter(reviewByReviewerId))

  return (
    <>
      <Row>
        <Banner text={[hacker.firstName, hacker.lastName].join(' ')} />
      </Row>
      <Row>
        <Col xs={12} md={3} >
          <h3 className='text-center'>Hakkeruus</h3>
          <Hackcordion bookReviews={bookReviews} courseReviews={courseReviews} skills={hacker.skills} />
        </Col>
        <Col xs={12} md={9} >
          <h3 className='text-center'>Projektit</h3>
          <ProjectsTable projects={hacker.projects} />
        </Col>
      </Row>
    </>
  )
}

export default withRouter(Hacker)