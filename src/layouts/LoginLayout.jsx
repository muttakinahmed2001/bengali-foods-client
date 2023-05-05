 
import Header from '../pages/Shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import { Container } from 'react-bootstrap';
import Spinners from '../pages/Spinners';
const navigation = useNavigation();
const LoginLayout = () => {
    return (
        <div>
            <Container>   <Header></Header>
            <div>{navigation.state === 'loading' &&  <Spinners></Spinners>}</div>
            <Outlet></Outlet>
            <Footer></Footer></Container>
         
        </div>
    );
};

export default LoginLayout;