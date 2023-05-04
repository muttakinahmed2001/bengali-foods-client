import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import { FaUserCircle } from 'react-icons/fa';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
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

                           
                              <Link className='me-2' to='/'>Home</Link>  
                             
                             <Link>Blog </Link>

                        </Nav>
                        <Nav>
                           {user ? <Link className='text-black me-2'>   <FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle> </Link> :
                           
                            
                                <Button variant="secondary">Login</Button>}
                             
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;