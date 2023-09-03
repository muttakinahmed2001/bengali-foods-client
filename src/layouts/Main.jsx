import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { LoadingContext } from "../providers/LoadingProvider";
import Spinner from "../pages/Spinner";

const Main = () => {
  const { isLoading } = useContext(LoadingContext);
  return (
    <div>
      <Header></Header>
      {isLoading ? <Spinner></Spinner> : ""}
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
