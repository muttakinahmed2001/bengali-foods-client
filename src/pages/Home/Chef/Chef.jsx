import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./Chef.css";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Chef = ({ chef }) => {
  const { id, name, picture, experience, likes, numRecipes } = chef;

  return (
    <Container>
      <Card className="p-3">
        <div style={{ height: "200px" }}>
          <LazyLoad height={200}>
            <Card.Img
              className="img-fluid w-100 h-100"
              variant="top"
              src={picture}
            />
          </LazyLoad>
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Years of experience:{experience}</Card.Text>

          <Card.Text>Numbers of recipes:{numRecipes}</Card.Text>
          <Card.Text>Likes:{likes}</Card.Text>
          <Link to={`/chefs/${id}`}>
            {" "}
            <Button variant="warning">View recipes</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Chef;
