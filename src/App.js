import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getBooks } from './reducers/booksReducer'
import { getHackers } from './reducers/hackersReducer'
import { getReviews } from './reducers/reviewsReducer'
import NavBar from './components/NavBar'
import Router from './components/Router'
import Footer from './components/Footer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getReviews())
    dispatch(getBooks())
    dispatch(getHackers())
    // eslint-disable-next-line
  }, [])

  return (
    <Container fluid>
      <BrowserRouter>
        <NavBar />
        <Router />
        <Footer />
      </BrowserRouter>
    </Container>
  )
}

export default App
