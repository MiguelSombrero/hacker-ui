import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getBooks } from './reducers/studiesReducer'
import { getHackers } from './reducers/hackersReducer'
import { getBookReviews } from './reducers/studiesReducer'
import { GoArrowUp } from 'react-icons/go'
import { HashLink } from 'react-router-hash-link'
import NavBar from './components/NavBar'
import Router from './components/Router'
import Footer from './components/Footer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBookReviews())
    dispatch(getBooks())
    dispatch(getHackers())
    // eslint-disable-next-line
  }, [])

  return (
    <Container id='top' fluid>
      <BrowserRouter>
        <NavBar />
        <Router />
        <Footer />
        <HashLink smooth to='#top'>
          <GoArrowUp style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: '9999' }} />
        </HashLink>
      </BrowserRouter>
    </Container>
  )
}

export default App
