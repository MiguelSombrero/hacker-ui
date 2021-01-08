import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useFilters } from '../hooks'
import { useDispatch } from 'react-redux'
import { getCourses } from '../reducers/coursesReducer'
import Search from './Search'
import Banner from './Banner'
import RatingBadge from './elements/RatingBadge'

const Courses = () => {
  const [filters, onChange] = useFilters()
  const [visible, setVisible] = useState(10)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCourses())
    // eslint-disable-next-line
  }, [])

  const hasName = course => filters
    .every(filter => course.name.toLowerCase().includes(filter.toLowerCase()))

  const courses = useSelector(state => state.courses.filter(hasName))

  const coursesToShow = courses.slice(0, visible)

  const handleShowMore = () => setVisible(visible + 10)

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
      <Row >
        <Col>
          <ListGroup variant='flush' className='text-center'>
            {coursesToShow.map(course =>
              <ListGroup.Item action key={course.id} >
                <Row>
                  <Col xs={12} md={8}>
                    <Link to={`/courses/${course.id}`}>
                      <h3>{course.name}</h3>
                    </Link>
                  </Col>
                  <Col xs={12} md={4}>
                    <h4><RatingBadge rating={course.rating} /></h4>
                    <p className='text-muted'>{course.reviews.length + ' arviota'}</p>
                  </Col>
                </Row>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex justify-content-center m-2'>
          {courses.length > visible &&
          <Button id='show-more-button' onClick={handleShowMore}>Lataa lisää</Button>
          }
        </Col>
      </Row>
    </>
  )
}

export default Courses