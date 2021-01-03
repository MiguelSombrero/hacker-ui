import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFilters } from '../hooks'
import { bookByRating } from '../functions/sorting'
import Search from './Search'
import Banner from './Banner'

const Books = () => {
  const [filters, onChange] = useFilters()

  const hasName = book =>
    filters.every(filter => book.name.toLowerCase().includes(filter.toLowerCase()))

  const books = useSelector(state =>
    state.books.filter(hasName))

  return (
    <>
    <Row>
      <Banner text='Eti kirja' />
    </Row>
    <Row>
      <Col>
        <Search
          id='filter-books-field'
          onChange={onChange}
          placeholder='filter books ...'
        />
      </Col>
    </Row>
    <Row >
      <Col>
        <ListGroup variant='flush' className='text-center'>
          {books.sort(bookByRating).map(book =>
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