import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import { bookByReviewCreated } from '../functions/sorting'
import { reviewByGreatestCreated } from '../functions/reducers'
import Review from './Review'
import Banner from './Banner'

const FrontPage = () => {
  const [visible, setVisible] = useState(5)
  
  const books = useSelector(state =>
    state.books.sort(bookByReviewCreated))

  const booksToShow = books.slice(0, visible)

  const handleShowMore = () => setVisible(visible + 5)

  return (
    <>
    <Row>
      <Banner text='Hakkeri Portaali' />
    </Row>
    <Row>
      <Col xs={12} md={3}>

      </Col>
      <Col xs={12} md={6}>
        <h2>Uusimmat kirja-arviot</h2>
        {booksToShow.map(book =>
          <Review key={book.id} book={book} review={book.reviews.reduce(reviewByGreatestCreated)} />
        )}
        
        <Button className='hacker-style' onClick={handleShowMore}>Lataa lisää</Button>
      </Col>
      <Col xs={12} md={3}>

      </Col>
    </Row>
    </>
  )
}
  

export default FrontPage