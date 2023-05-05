
import { useContext, useState  } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const [error,setError]=useState('');
    const {signIn,googleSignIn,githubSignIn}=useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

signIn(email,password)
.then(result =>{
    const loggedUser = result.user;
    console.log(loggedUser)
    setError('')
} ) 
.catch(error =>   setError(error.message))



    }

    const handleGoogleSignIn = () => {
        googleSignIn()
.then(result => {
    const user = result.user;
    console.log(user)
    setError('')
})


.catch(error => setError(error.message))
    }

    const handleGithubSignIn = () => {
        githubSignIn()
        .then(result => {
            const user = result.user;
            setError('')
        })
        .catch(error => setError(error.message))
    }
    return (
         
            <Container className='w-25 mx-auto'>
                <h3>Please Login</h3>
                <Form onSubmit={handleLogin}>
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
                <Form.Text></Form.Text>
                <br />
                <Form.Text className='text-danger'>{error}</Form.Text>
                <br />
                <Button onClick={handleGoogleSignIn} className='mb-2 mt-2' variant="primary" type="submit">
                    Sign-in with google
                </Button>  <br />
                <Button onClick={handleGithubSignIn} variant="primary" type="submit">
                    Sign-in with github
                </Button>
            </Form></Container>

         
    );
};

export default Login;