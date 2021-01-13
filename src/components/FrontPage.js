import React from 'react'
import { useSelector } from 'react-redux'
import { reviewByCreateDate } from '../functions/reducers'
import { Row, Col } from 'react-bootstrap'
import Banner from './Banner'
import HackOMeter from './HackOMeter'
import LinkToHackersPage from './elements/LinkToHackersPage'
import { ListGroup } from 'react-bootstrap'
import RatingBadge from './elements/RatingBadge'
import { Link } from 'react-router-dom'

const FrontPage = () => {
  const bookReviews = useSelector(state => state.studies.bookReviews)

  const books = useSelector(state => state.studies.books)
  const courses = useSelector(state => state.studies.courses)

  const reviewCount = Object.values(bookReviews.reduce(reviewByCreateDate, {}))

  const hackers = useSelector(state => state.hackers
    .filter(hacker => hacker.skills.length === 0))

  const contentByReviewsCount = (a, b) =>
    a.reviews.length > b.reviews.length ? -1 : 1

  const setBackgroundColor = (rating) => {
    switch(Math.round(rating)) {
    case 2:
      return '#ff9933'
    case 3:
      return '#ffff00'
    case 4:
      return '#99ff33'
    case 5:
      return '#1aff66'
    default:
      return '#ccffdd'
    }
  }

  return (
    <>
      <Row>
        <Banner text='Tervetuloa Hakkeri Portaaliin!' />
      </Row>
      <Row>
        <Col xs={12} md={4} >
          <h3 className='p-3'>Kuukauden arvostelut</h3>
          <HackOMeter entries={reviewCount}/>
        </Col>
        <Col xs={12} md={4} >
          <h3 className='p-3' >Luetuimmat kirjat</h3>
          <ListGroup variant='flush'>
            {books.sort(contentByReviewsCount).map(book =>
              <ListGroup.Item key={book.id} style={{ backgroundColor: setBackgroundColor(book.rating) }}>
                <Link to={`/books/${book.id}`} style={{ color: 'black' }}>
                  <h5>{book.name}</h5>
                </Link>
                <p>{'Arvosteluja ' + book.reviews.length}<span style={{ float: 'right' }}><RatingBadge rating={book.rating} /></span></p>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
        <Col xs={12} md={4} >
          <h3 className='p-3' >Käydyimmät kurssit</h3>
          <ListGroup variant='flush'>
            {courses.sort(contentByReviewsCount).map(course =>
              <ListGroup.Item key={course.id} style={{ backgroundColor: setBackgroundColor(course.rating) }}>
                <Link to={`/courses/${course.id}`} style={{ color: 'black' }}>
                  <h5>{course.name}</h5>
                </Link>
                <p>{'Arvosteluja ' + course.reviews.length}<span style={{ float: 'right' }}><RatingBadge rating={course.rating} /></span></p>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}


export default FrontPage