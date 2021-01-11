import React from 'react'
import { Row, Col, Nav } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
import { GoMarkGithub, GoHome, GoArrowUp } from 'react-icons/go'

const Footer = () =>
  <Row className='footer mt-3'>
    <Col>
      <Nav className='justify-content-center'>
        <Nav.Link as='span'>
          <HashLink smooth to='/#top' >
            <GoHome />
          </HashLink>
        </Nav.Link>
        <Nav.Link href='https://github.com/MiguelSombrero/hacker-api'>
          <GoMarkGithub />
        </Nav.Link>
        <Nav.Link as='span' className='d-flex justify-content-end'>
          <HashLink smooth to='#top'>
            <GoArrowUp size='2.4rem'/>
          </HashLink>
        </Nav.Link>
      </Nav>
    </Col>
  </Row>

export default Footer