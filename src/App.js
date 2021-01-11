import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getHackers } from './reducers/hackersReducer'
import { getBookReviews, getCourseReviews, getBooks, getCourses } from './reducers/studiesReducer'
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
    <Container id='top' fluid style={{ minHeight: '100vh' }}>
      <BrowserRouter>
        <NavBar />
        <Router />
        <Footer />
      </BrowserRouter>
    </Container>
  )
}

export default App
