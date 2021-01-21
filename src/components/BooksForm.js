import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { createBookReview } from '../reducers/studiesReducer'
import { useTextField, useNumberField } from '../hooks'

const BooksForm = (props) => {
  const dispatch = useDispatch()
  const [validated, setValidated] = useState(false)
  const [email, emailErrors] = useTextField('text', 5, 50, true)
  const [bookName, bookNameErrors] = useTextField('text', 1, 50, true)
  const [bookDuration, bookDurationErrors] = useTextField('text', 3, 10, true)
  const [bookAuthors, bookAuthorsErrors] = useTextField('text', 1, 50, true)
  const [review, reviewErrors] = useTextField('text', 1, 1000, true)
  const [rating] = useNumberField('range', 1, 5, 1, true)

  const books = useSelector(state => state.studies.books)

  const handleAddBook = async (event) => {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      setValidated(true)
      return
    }

    try {
      dispatch(createBookReview({
        email: email.value,
        bookName: bookName.value,
        bookDuration: bookDuration.value,
        bookAuthors: bookAuthors.value,
        review: review.value,
        rating: rating.value
      }))

      props.history.push('/books')

    } catch (exception) {
      console.log('Failed to add book', exception)
    }
  }

  return (
    <Row>
      <Col className='form'>
        <h3 className='mb-3' >Arvioi kirja</h3>
        <Form noValidate validated={validated} onSubmit={handleAddBook} >
          <Form.Group >
            <Form.Label>Email</Form.Label>
            <Form.Control {...email} placeholder='Your email' />
            <Form.Control.Feedback type='invalid' >{emailErrors}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group >
            <Form.Label>Kirjan nimi</Form.Label>
            <Form.Control {...bookName} list='book-name' placeholder='e.g. The Scrum Fieldbook' />
            <datalist id='book-name' >
              {books.map(book =>
                <option key={book.id} value={book.name} ></option>
              )}
            </datalist>
            <Form.Control.Feedback type='invalid' >{bookNameErrors}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group >
            <Form.Label>Kirjan kesto</Form.Label>
            <Form.Control {...bookDuration} placeholder='muodossa hh:mm' />
            <Form.Control.Feedback type='invalid' >{bookDurationErrors}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group >
            <Form.Label>Kirjan kirjoittajat</Form.Label>
            <Form.Control {...bookAuthors} placeholder='muodossa Sukunimi, Etunimi' />
            <Form.Control.Feedback type='invalid' >{bookAuthorsErrors}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group >
            <Form.Label>Mitä mieltä olit kirjasta</Form.Label>
            <Form.Control as='textarea' rows='4' {...review} />
            <Form.Control.Feedback type='invalid' >{reviewErrors}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group >
            <Form.Label>Arvosana</Form.Label>
            <Form.Text>{rating.value}</Form.Text>
            <Form.Control {...rating}/>
          </Form.Group>
          <Button type='submit' variant='secondary'>Lisää kirja-arvio</Button>
        </Form>
      </Col>
    </Row>
  )
}

export default withRouter(BooksForm)