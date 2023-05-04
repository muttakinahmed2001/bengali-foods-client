import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import ChefDetails from '../pages/ChefDetails/ChefDetails/ChefDetails';
import { Outlet } from 'react-router-dom';

const ChefLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default ChefLayout;