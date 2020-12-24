import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getBooks } from './reducers/booksReducer'
import { getEmployees } from './reducers/employeesReducer'
import NavBar from './components/NavBar'
import Router from './components/Router'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
  }, [])

  useEffect(() => {
    dispatch(getEmployees())
  }, [])

  return (
    <Container fluid>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </Container>
  )
}

export default App
