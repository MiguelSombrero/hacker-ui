import React from 'react'
import { Col, Jumbotron } from 'react-bootstrap'

const Banner = ({ text }) =>
  <Jumbotron as={Col} fluid className='hacker-style text-center'>
    <h1>{ text.substring(0, text.length - 2) }<span style={{ color: 'grey' }}>{text.substring(text.length - 2)}</span></h1>
  </Jumbotron>

export default Banner