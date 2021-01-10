import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getHackers } from './reducers/hackersReducer'
import { getBookReviews, getCourseReviews, getBooks, getCourses } from './reducers/studiesReducer'
import { GoArrowUp } from 'react-icons/go'
import { HashLink } from 'react-router-hash-link'
import NavBar from './components/NavBar'
import Router from './components/Router'
import Footer from './components/Footer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBookReviews())
    dispatch(getCourseReviews())
    dispatch(getBooks())
    dispatch(getCourses())
    dispatch(getHackers())
    // eslint-disable-next-line
  }, [])

  return (
    <Container id='top' fluid>
      <BrowserRouter>
        <NavBar />
        <Router />
        <HashLink smooth to='#top'>
          <GoArrowUp style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: '9999' }} />
        </HashLink>
        <Footer />
      </BrowserRouter>
    </Container>
  )
}

export default App
