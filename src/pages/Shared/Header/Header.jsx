import logo from "../../../assets/logo.png";
import "./Header.css";

import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <Navbar
      className="mt-2"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light">
      <img className="img-fluid" src={logo} alt="" />

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Link className="me-2 text-decoration-none text-black" to="/">
            Home
          </Link>

          <Link to="/blog" className="text-decoration-none text-black">
            Blog{" "}
          </Link>
        </Nav>
        <Nav>
          {user ? (
            <div>
              <img
                className="rounded-5 me-2 mt-1 "
                style={{ width: "40px" }}
                data-toggle="tooltip"
                title={user.displayName}
                src={user.photoURL}
              />
              <Link>
                <Button onClick={handleLogOut} variant="secondary">
                  Log out
                </Button>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <Button className="mt-1 me-2" variant="secondary">
                Login
              </Button>
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
