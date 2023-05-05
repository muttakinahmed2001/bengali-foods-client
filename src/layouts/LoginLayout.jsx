 
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import { Container } from 'react-bootstrap';

const LoginLayout = () => {
    return (
        <div>
            <Container>   <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer></Container>
         
        </div>
    );
};

export default LoginLayout;