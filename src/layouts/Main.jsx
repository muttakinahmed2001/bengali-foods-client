import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Home from '../pages/Home/Home/Home';
import { Container } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Container><Header></Header>
            <Container> <Home></Home></Container>
           
            <Footer></Footer></Container>
            
        </div>
    );
};

export default Main;