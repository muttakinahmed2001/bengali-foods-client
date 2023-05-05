import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import ChefDetails from '../pages/ChefDetails/ChefDetails/ChefDetails';
import { Outlet, useNavigation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Spinners from '../pages/Spinners';

const ChefLayout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Container> <Header></Header>
            <div>{navigation.state === 'loading' &&  <Spinners></Spinners>}</div>
            <Outlet></Outlet>
            <Footer></Footer></Container>
           
        </div>
    );
};

export default ChefLayout;