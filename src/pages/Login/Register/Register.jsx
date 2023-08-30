import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
     const [error,setError]=useState('')
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value
        const password = form.password.value
        console.log(name, email, password, photo)
       
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
            
                console.log(createdUser)
                updateUserData(result.user,name,photo)
               
            })
            .catch(error => {
                setError(error.message);
            })

        const updateUserData = (user,name, photo) => {
            updateProfile(user,{
                displayName: name ,
                photoURL:photo
            })
            .then(()=>{
                console.log('user name updated')
            })
            .catch(error => setError(error.message))
        }


    }

    return (
        <Container
            className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                </Form.Group>
                <Button className='mb-2' variant="primary" type="submit">
                    Register
                </Button>

                <br />
                <Form.Text>
                    Already have an account?<Link to="/login">Login</Link></Form.Text>
                    <br />
                    <Form.Text className='text-danger'>
                        {error}
                    </Form.Text>
                     
            </Form></Container>
    );
};

export default Register;