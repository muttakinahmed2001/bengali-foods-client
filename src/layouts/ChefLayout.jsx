import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import ChefDetails from '../pages/ChefDetails/ChefDetails/ChefDetails';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const ChefLayout = () => {
    return (
        <div>
            <Container> <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer></Container>
           
        </div>
    );
};

export default ChefLayout;