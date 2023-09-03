import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Outlet></Outlet>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;
