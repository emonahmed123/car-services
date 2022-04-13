import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Images/logo-black.png'
const Header = () => {
    return (
        <>

            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                    <img
        src={logo}
  
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;