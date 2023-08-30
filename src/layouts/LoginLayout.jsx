import Header from "../pages/Shared/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import { Container } from "react-bootstrap";
import Spinners from "../pages/Spinners";

const LoginLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <Container>
        <div>{navigation.state === "loading" && <Spinners></Spinners>}</div>
        <Outlet></Outlet>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;
