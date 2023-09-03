import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import Spinner from "../pages/Spinner";
import { AuthContext } from "../providers/AuthProvider";

const Main = () => {
  // const { isLoading } = useContext(LoadingContext);
  const { loading } = useContext(AuthContext);
  return (
    <div>
      <Header></Header>
      {loading ? <Spinner></Spinner> : ""}
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
