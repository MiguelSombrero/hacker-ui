import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFilters } from '../hooks'
import Search from './Search'

const Books = () => {
  const [filters, onChange] = useFilters()

  const hasName = book =>
    filters.every(filter => book.name.toLowerCase().includes(filter.toLowerCase()))

  const books = useSelector(state =>
    state.books.filter(hasName))

  return (
    <>
    <Row>
      <Col>
        <Search
          onChange={onChange}
          placeholder='filter books ...'
        />
      </Col>
    </Row>
    <Row >
      <Col>
        <ListGroup variant='flush' className='text-center'>
          {books.map(book =>
          <ListGroup.Item action key={book.id} >
            <Row>
              <Col>
                <Link to={`/books/${book.id}`}>
                  <h3>{book.name + ' (' + book.type.name + ')'}</h3>
                </Link>    
                <p>{book.authors}</p>
              </Col>
              <Col>
                <h4>{book.rating + ' / 5'}</h4>
                <p className='text-muted'>{book.reviews.length + ' arviota'}</p>
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