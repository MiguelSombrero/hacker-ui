import React from 'react'
import { Form } from 'react-bootstrap'

const Search = (props) =>
  <Form inline className='justify-content-center p-3 m-3'>
    <Form.Control
      {...props}
      name='filter'
      type ='text'
      >
    </Form.Control>
  </Form>

export default Search