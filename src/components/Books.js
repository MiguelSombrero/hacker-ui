import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Book from './Book'
import { ListGroup } from 'react-bootstrap'

const Books = () => {
  const books = useSelector(state => state.books)
  console.log(books)

  return (
    <Row>
      <Col>
        <ListGroup variant='flush' >
          {books && books.map(book => 
            <Book key={book.name} book={book} />    
          )}
        </ListGroup>
      </Col>
    </Row>
  )
}

export default Books