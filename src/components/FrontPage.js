import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { bookByReviewCreated } from '../functions/sorting'

const FrontPage = () => {
  const [visible, setVisible] = useState(5)
  
  const books = useSelector(state =>
    state.books.sort(bookByReviewCreated))

  const booksToShow = books.slice(0, visible)

  console.log(booksToShow)

  return (
    <Row>
      <Col>
        {booksToShow.map(book =>
          <p key={book.id} >{book.name}</p>
        )}
      </Col>
    </Row>
  )
}
  

export default FrontPage