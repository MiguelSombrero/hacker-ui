import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, ListGroup, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Books = () => {
  const [filter, setFilter] = useState('')

  const books = useSelector(state => state.books)

  const booksToShow = books.filter(book =>
    book.name.toLowerCase().includes(filter.toLowerCase()))

  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <>
    <Row>
      <Col>
        <Form inline className='justify-content-center p-3 m-3'>
          <Form.Control
            onChange={handleChange}
            name='filter'
            type ='text'
            placeholder='filter books ...'>
          </Form.Control>
        </Form>
      </Col>
    </Row>
    <Row >
      <Col>
        <ListGroup variant='flush' className='text-center'>
          {booksToShow && booksToShow.map(book =>
          <ListGroup.Item action key={book.name} >
            <Row>
              <Col>
                <Link to={{ pathname: `/books/${book.name}`, state: { book: {...book} } }}>
                  <h3>{book.name}</h3>
                </Link>    

                <p>{book.authors.map(author =>
                  author.lastname + ' ' + author.firstname).join(', ')}
                </p>
              </Col>
              <Col>
                <h4>{book.rating}</h4>
              </Col>
            </Row>
          </ListGroup.Item>
          )}
        </ListGroup>
      </Col>
    </Row>
    </>
  )
}

export default Books