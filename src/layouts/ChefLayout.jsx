import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";

import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const ChefLayout = () => {
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

export default ChefLayout;
