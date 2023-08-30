import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <Card className="text-center footer w-100 mt-5 mx-auto">
      <Card.Header>Bengali Foods</Card.Header>
      <Card.Body>
        <Card.Title>Eat healthy food ,stay healthy</Card.Title>
        <Card.Text className="d-flex justify-content-center">
          <Link className="me-2 text-decoration-none">Home</Link>
          <Link className="me-2 text-decoration-none">About</Link>
          <Link className="me-2 text-decoration-none">Blog</Link>
          <Link className="me-2 text-decoration-none">Contact</Link>
        </Card.Text>
        <Card.Text className="d-flex justify-content-center gap-2">
          <FaFacebook></FaFacebook>
          <FaTwitter></FaTwitter>
          <FaInstagram></FaInstagram>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        Copyright <FaCopyright></FaCopyright> 2022 Bengali Foods
      </Card.Footer>
    </Card>
  );
};

export default Footer;
