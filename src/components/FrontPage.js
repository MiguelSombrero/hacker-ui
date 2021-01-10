import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { reviewByCreateDate } from '../functions/reducers'
import { Row, Col, Button } from 'react-bootstrap'
import Review from './Review'
import Banner from './Banner'
import HackOMeter from './HackOMeter'

const FrontPage = () => {
  const [visible, setVisible] = useState(10)

  const handleShowMore = () => setVisible(visible + 10)

  const bookReviews = useSelector(state => state.studies.bookReviews)

  const reviewsToShow = bookReviews.slice(0, visible)

  const reviewCount = Object.values(bookReviews.reduce(reviewByCreateDate, {}))

  return (
    <>
      <Row>
        <Banner text='Hakkeri Portaali' />
      </Row>
      <Row>
        <Col className='text-center' xs={12} md={3} >
          <h2 className='p-2 text-center'>Hack &apos;O meter</h2>
          <HackOMeter entries={reviewCount}/>
        </Col>
        <Col id='review-column' xs={12} md={6} >
          <h2 className='p-2 text-center'>Uusimmat arviot</h2>
          {reviewsToShow.map(review =>
            <Review key={review.id} review={review} />
          )}
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center m-2'>
          {bookReviews.length > visible &&
          <Button id='show-more-button' onClick={handleShowMore}>Lataa lisää</Button>
          }
        </Col>
      </Row>
    </>
  )
}


export default FrontPage