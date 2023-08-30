import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";

import { Outlet, useNavigation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Spinners from "../pages/Spinners";

const ChefLayout = () => {
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

export default ChefLayout;
