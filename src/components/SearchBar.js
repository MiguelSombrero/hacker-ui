import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

const SearchBar = ({ title, ...props }) =>
  <Row className='mb-3' style={{ backgroundColor: 'lightGrey' }}>
    <Col>
      <Form inline className='justify-content-end m-2' onSubmit={(event) => event.preventDefault()}>
        <h4 className='m-2' style={{ color: 'rgb(227, 38, 33)' }}>{title}</h4>
        <Form.Control
          {...props}
          name='filter'
          type ='search'
        >
        </Form.Control>
      </Form>
    </Col>
  </Row>

export default SearchBar