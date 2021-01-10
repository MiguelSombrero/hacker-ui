import React from 'react'
import { Row, Col, Nav, Jumbotron } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
import { GoMarkGithub, GoHome } from 'react-icons/go'

const Footer = () =>
  <Row className='footer mt-3 mb-3'>
    <Jumbotron as={Col} style={{ backgroundColor: 'lightGrey' }}>
      <Nav className='justify-content-center'>
        <Nav.Link as='span'>
          <HashLink smooth to='/#top' ><GoHome /></HashLink>
        </Nav.Link>
        <Nav.Link href='https://github.com/MiguelSombrero/hacker-api'>
          <GoMarkGithub />
        </Nav.Link>
      </Nav>
    </Jumbotron>
  </Row>

export default Footer