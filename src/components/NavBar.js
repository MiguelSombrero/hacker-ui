import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Row, Col } from 'react-bootstrap'

const NavBar = () =>
  <Row id='navbar'>
    <Navbar as={Col} collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#' as='span'>
            <NavLink to='/' >Koti</NavLink>
          </Nav.Link>
          <Nav.Link href='#' as='span'>
            <NavLink to='/books' >Kirjat</NavLink>
          </Nav.Link>
          <Nav.Link href='#' as='span'>
            <NavLink to='/courses' >Kurssit</NavLink>
          </Nav.Link>
          <Nav.Link href='#' as='span'>
            <NavLink to='/hackers' >Hakkerit</NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Row>

export default NavBar