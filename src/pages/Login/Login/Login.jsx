
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
         
            <Container className='w-25 mx-auto'>
                <h3>Please Login</h3>
                <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password"  placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                </Form.Group>
                <Button className='mb-2' variant="primary" type="submit">
                    Login
                </Button>

                <br />
                <Form.Text> Don't have an account? <Link to='/register'>Register</Link></Form.Text>
                <Button className='mb-2 mt-2' variant="primary" type="submit">
                    Sign-in with google
                </Button>  <br />
                <Button variant="primary" type="submit">
                    Sign-in with github
                </Button>
            </Form></Container>

         
    );
};

export default Login;