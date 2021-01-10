import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFilters } from '../hooks'
import Search from './Search'
import Banner from './Banner'
import RatingBadge from './elements/RatingBadge'

const Books = () => {
  const [filters, onChange] = useFilters()
  const [visible, setVisible] = useState(10)

  const hasName = book => filters
    .every(filter => book.name.toLowerCase().includes(filter.toLowerCase()))

  const books = useSelector(state => state.studies.books.filter(hasName))

  const booksToShow = books.slice(0, visible)

  const handleShowMore = () => setVisible(visible + 10)

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
            {booksToShow.map(book =>
              <ListGroup.Item action key={book.id} >
                <Row>
                  <Col xs={12} md={8}>
                    <Link to={`/books/${book.id}`}>
                      <h3>{book.name + ' (' + book.type.name + ')'}</h3>
                    </Link>
                    <p>{book.authors}</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <h4><RatingBadge rating={book.rating} /></h4>
                    <p className='text-muted'>{book.reviews.length + ' arviota'}</p>
                  </Col>
                </Row>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center m-2'>
          {books.length > visible &&
          <Button id='show-more-button' onClick={handleShowMore}>Lataa lisää</Button>
          }
        </Col>
      </Row>
    </>
  )
}

export default Books