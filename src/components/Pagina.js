'use client'

import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Pagina(props) {
  return (
    <>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/imoveis">Pagina Imoveis</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    <div className='bg-secondary text-center text-white py-2'>
        <h1>{props.titulo}</h1>

    </div>
    
    <Container className="mt-2">
        {props.children}

    </Container>
    
    
    
    
    
    
    
    </>
  )
}
