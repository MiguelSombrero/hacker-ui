import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
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

  const books = useSelector(state => state.books)
  console.log(books)

  const employees = useSelector(state => state.employees)
  console.log(employees)

  return (
    <Container fluid>
      <BrowserRouter>
        <NavBar />
        <Router books={books} />
      </BrowserRouter>
    </Container>
  )
}

export default App
