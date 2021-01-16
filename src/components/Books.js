import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, ListGroup, Button, Card } from 'react-bootstrap'
import { useFilters } from '../hooks'
import { contentByRating } from '../functions/sorting'
import SearchBar from './SearchBar'
import BookReview from './BookReview'
import Book from './Book'

const Books = () => {
  const [filters, onChange] = useFilters()
  const [visibleBooks, setVisibleBooks] = useState(10)
  const [visibleBookReviews, setVisibleBookReviews] = useState(10)

  const hasName = book => filters
    .every(filter => book.name.toLowerCase().includes(filter.toLowerCase()))

  const books = useSelector(state => state.studies.books
    .filter(hasName)
    .sort(contentByRating)
  )

  const booksToShow = books.slice(0, visibleBooks)

  const bookReviews = useSelector(state => state.studies.bookReviews)
  const bookReviewsToShow = bookReviews.slice(0, visibleBookReviews)

  const handleShowMoreBooks = () => setVisibleBooks(visibleBooks + 10)
  const handleShowMoreBookReviews = () => setVisibleBookReviews(visibleBookReviews + 10)

  return (
    <>
      <SearchBar id='filter-books-field' onChange={onChange} title='Etsi kirjoja' placeholder='scrum fieldbook, war and crime, ...' />
      <Row>
        <Col id='book-reviews-column' xs={12} md={4} >
          <h2 className='p-2 text-center'>Uusimmat kirja-arviot</h2>
          {bookReviewsToShow.map(review =>
            <BookReview key={review.id} review={review} />
          )}
          <Row>
            <Col className='d-flex justify-content-center m-2'>
              {bookReviews.length > visibleBookReviews &&
                <Button variant='secondary' onClick={handleShowMoreBookReviews}>Lataa lisää kirja-arvosteluja</Button>
              }
            </Col>
          </Row>
        </Col>
        <Col id='books-column' xs={12} md={8}>
          <h2 className='p-2 text-center'>Kirjat</h2>
          <Card>
            <ListGroup variant='flush' className='text-center'>
              {booksToShow.map(book =>
                <Book key={book.id} book={book} />
              )}
            </ListGroup>
          </Card>
          <Row>
            <Col className='d-flex justify-content-center m-2'>
              {books.length > visibleBooks &&
                <Button
                  id='show-more-books-button'
                  variant='secondary'
                  onClick={handleShowMoreBooks}
                >Lataa lisää kirjoja</Button>
              }
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Books