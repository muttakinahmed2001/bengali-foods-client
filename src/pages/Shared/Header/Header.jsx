
import logo from '../../../assets/logo.png';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';

const Header = () => {
    const { user } = useContext(AuthContext);
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
                            {user ? <div className="container">

                                <img className='rounded-5' style={{width:'100px'}} data-toggle="tooltip" title={user.displayName} src={user.photoURL} />
                            </div> :
                                <Link to='/login'>
                                    <Button variant="secondary">Login</Button></Link>
                            }
 

 

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        </div >
    );
};

export default Header;