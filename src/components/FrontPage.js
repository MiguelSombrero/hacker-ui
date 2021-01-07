import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import Review from './Review'
import Banner from './Banner'

const FrontPage = () => {
  const [visible, setVisible] = useState(10)

  const reviews = useSelector(state => state.reviews)

  const reviewsToShow = reviews.slice(0, visible)

  const handleShowMore = () => setVisible(visible + 10)

  return (
    <>
      <Row>
        <Banner text='Hakkeri Portaali' />
      </Row>
      <Row>
        <Col id='review-column' xs={12} md={{ span: 6, offset: 3 }} >
          <h2 className='p-2 text-center'>Uusimmat kirja-arviot</h2>
          {reviewsToShow.map(review =>
            <Review key={review.id} review={review} />
          )}
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center m-2'>
          {reviews.length > visible &&
          <Button id='show-more-button' onClick={handleShowMore}>Lataa lisää</Button>
          }
        </Col>
      </Row>
    </>
  )
}


export default FrontPage