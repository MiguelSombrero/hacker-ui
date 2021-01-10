import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

const SearchBar = (props) =>
  <Row style={{ backgroundColor: 'rgb(227, 38, 33)' }}>
    <Col>
      <Form inline className='justify-content-end m-2'>
        <h4 className='mr-3' style={{ color: 'white' }}>Etsi osaajia</h4>
        <Form.Control
          {...props}
          name='filter'
          type ='text'
        >
        </Form.Control>
      </Form>
    </Col>
  </Row>

export default SearchBar