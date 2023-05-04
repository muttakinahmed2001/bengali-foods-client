import React from 'react';
import logo from '../../../assets/logo.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='text-center'>
               
              

            </div>
            <Navbar className='mt-2' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <img src={logo} alt="" />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            <Nav.Link href="#features">
                              <Link to='/'>Home</Link>  
                                </Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">User Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;