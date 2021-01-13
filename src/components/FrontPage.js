import React from 'react'
import { useSelector } from 'react-redux'
import { reviewByCreateDate } from '../functions/reducers'
import { contentByReviewsCount } from '../functions/sorting'
import { Row, Col, ListGroup } from 'react-bootstrap'
import Banner from './Banner'
import HackOMeter from './HackOMeter'
import ListItem from './elements/ListItem'

const FrontPage = () => {
  const bookReviews = useSelector(state => state.studies.bookReviews)
  const courseReviews = useSelector(state => state.studies.courseReviews)
  const books = useSelector(state => state.studies.books)
  const courses = useSelector(state => state.studies.courses)

  const reviewCount = Object.values(bookReviews
    .concat(courseReviews)
    .reduce(reviewByCreateDate, {})
  )

  return (
    <>
      <Row>
        <Banner text='Hakkeri Portaali' />
      </Row>
      <Row>
        <Col xs={12} md={4} >
          <h3 className='p-3'>Kuukauden arvostelut</h3>
          <HackOMeter entries={reviewCount}/>
        </Col>
        <Col xs={12} md={4} >
          <h3 className='p-3' >Luetuimmat kirjat</h3>
          <ListGroup id='books-list' variant='flush'>
            {books.sort(contentByReviewsCount).map(book =>
              <ListItem key={book.id} item={book} link={`/books/${book.id}`} />
            )}
          </ListGroup>
        </Col>
        <Col xs={12} md={4} >
          <h3 className='p-3' >Käydyimmät kurssit</h3>
          <ListGroup id='courses-list' variant='flush'>
            {courses.sort(contentByReviewsCount).map(course =>
              <ListItem key={course.id} item={course} link={`/courses/${course.id}`} />
            )}
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}


export default FrontPage