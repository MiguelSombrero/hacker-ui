import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import { reviewByCreated } from '../functions/sorting'
import Review from './Review'
import Banner from './Banner'

const FrontPage = () => {
  const [visible, setVisible] = useState(5)
  
  const books = useSelector(state => state.books)

  const reviewWithBook = (review, book) => {
    return Object.assign(review, 
      { book:
        {
          id: book.id,
          name: book.name,
          authors: book.authors
        } 
      }
    )
  }

  const reviews = books
    .map(book => book.reviews
      .map(review => reviewWithBook(review, book)))
    .flat()
  
  const reviewsToShow = reviews
    .sort(reviewByCreated)
    .slice(0, visible)

  const handleShowMore = () => setVisible(visible + 5)

  return (
    <>
    <Row>
      <Banner text='Hakkeri Portaali' />
    </Row>
    <Row>
      <Col id='review-column' xs={12} md={{ span: 6, offset: 3 }} >
        <h2 className='p-2'>Uusimmat kirja-arviot</h2>
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