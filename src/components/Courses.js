import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import { useFilters } from '../hooks'
import Search from './Search'
import Banner from './Banner'
import CourseReview from './CourseReview'
import Course from './Course'

const Courses = () => {
  const [filters, onChange] = useFilters()
  const [visibleCourses, setVisibleCourses] = useState(10)
  const [visibleCourseReviews, setVisibleCourseReviews] = useState(10)

  const hasName = course => filters
    .every(filter => course.name.toLowerCase().includes(filter.toLowerCase()))

  const courses = useSelector(state => state.studies.courses.filter(hasName))
  const coursesToShow = courses.slice(0, visibleCourses)

  const courseReviews = useSelector(state => state.studies.courseReviews)
  const courseReviewsToShow = courseReviews.slice(0, visibleCourseReviews)

  const handleShowMoreCourses = () => setVisibleCourses(visibleCourses + 10)
  const handleShowMoreCourseReviews = () => setVisibleCourseReviews(visibleCourseReviews + 10)

  return (
    <>
      <Row>
        <Banner text='Eti kurssi' />
      </Row>
      <Row>
        <Col>
          <Search
            id='filter-courses-field'
            onChange={onChange}
            placeholder='etsi kursseja nimellä ...'
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4} >
          <h2 className='p-2 text-center'>Uusimmat kurssi-arviot</h2>
          {courseReviewsToShow.map(review =>
            <CourseReview key={review.id} review={review} />
          )}
          <Row>
            <Col className='d-flex justify-content-center m-2'>
              {courseReviews.length > visibleCourseReviews &&
                <Button variant='secondary' onClick={handleShowMoreCourseReviews}>Lataa lisää arvioita</Button>
              }
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={8}>
          <h2 className='p-2 text-center'>Kurssit</h2>
          <ListGroup variant='flush' className='text-center'>
            {coursesToShow.map(course =>
              <Course key={course.id} course={course} />
            )}
          </ListGroup>
          <Row>
            <Col className='d-flex justify-content-center m-2'>
              {courses.length > visibleCourses &&
                <Button variant='secondary' id='show-more-button' onClick={handleShowMoreCourses}>Lataa lisää kursseja</Button>
              }
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Courses