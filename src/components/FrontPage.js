import React from 'react'
import { useSelector } from 'react-redux'
import { reviewByCreateDate } from '../functions/reducers'
import { Row, Col } from 'react-bootstrap'
import Banner from './Banner'
import HackOMeter from './HackOMeter'

const FrontPage = () => {
  const bookReviews = useSelector(state => state.studies.bookReviews)

  const reviewCount = Object.values(bookReviews.reduce(reviewByCreateDate, {}))

  return (
    <>
      <Row>
        <Banner text='Hakkeri Portaali' />
      </Row>
      <Row>
        <Col className='text-center' xs={12} md={4} >
          <h2 className='p-2 text-center'>Hack &apos;O meter</h2>
          <HackOMeter entries={reviewCount}/>
        </Col>
        <Col xs={12} md={4} >
        </Col>
      </Row>
    </>
  )
}


export default FrontPage