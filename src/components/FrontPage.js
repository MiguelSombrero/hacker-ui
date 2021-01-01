import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { bookByReviewCreated } from '../functions/sorting'
import { reviewByGreatestCreated } from '../functions/reducers'
import Review from './Review'

const FrontPage = () => {
  const [visible, setVisible] = useState(5)
  
  const books = useSelector(state =>
    state.books.sort(bookByReviewCreated))

  const booksToShow = books.slice(0, visible)

  console.log(booksToShow)
  
  return (
    <Row>
      <Col xs={12} md={3}>

      </Col>
      <Col xs={12} md={6}>
        {booksToShow.map(book =>
          <Review key={book.id} book={book} review={book.reviews.reduce(reviewByGreatestCreated)} />
        )}
      </Col>
      <Col xs={12} md={3}>

      </Col>
    </Row>
  )
}
  

export default FrontPage