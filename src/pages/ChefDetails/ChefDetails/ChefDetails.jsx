import { Button, Card, CardGroup, Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "./ChefDetails.css";
import { useState } from "react";

const ChefDetails = () => {
  const chef = useLoaderData();
  const [favorite, setFavorite] = useState([]);
  console.log(chef);
  const { name, picture, likes, bio, numRecipes, experience, recipes } = chef;

  const handleFavorite = (id) => {
    const newRecipe = [...favorite, id];
    setFavorite(newRecipe);
  };
  return (
    <Container>
      {" "}
      <div className="card mb-3 bg-warning mt-5">
        <div className="d-flex flex-column flex-sm-row ">
          <div>
            <img
              src={picture}
              className="img-fluid rounded-start h-100"
              alt="..."
            />
          </div>
          <div>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{bio}</p>
              <p className="card-text">
                <small className="text-body-secondary"> Likes: {likes}</small>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {" "}
                  Number of recipes: {numRecipes}
                </small>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {" "}
                  Year of experience: {experience}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <CardGroup className="mt-5 p-5">
        <Card className="w-100  me-5 bg-warning">
          <Card.Body className="btn-container">
            <Card.Title>{recipes[0].name}</Card.Title>
            <Card.Text>
              <span> Ingredients:</span> {recipes[0].ingredients}
            </Card.Text>
            <Card.Text>Cooking method: {recipes[0].method}</Card.Text>
            <Card.Text className="mb-5">
              Ratings: {recipes[0].ratings}
            </Card.Text>
            <Button
              disabled={favorite.includes(recipes[0].name)}
              onClick={() => handleFavorite(recipes[0].name)}
              className="btn-recipe mb-2 bg-danger btn-one"
              variant="primary">
              Favorite
            </Button>
          </Card.Body>
        </Card>
        <Card className="w-100  me-5 bg-warning">
          <Card.Body className="btn-container">
            <Card.Title>{recipes[1].name}</Card.Title>
            <Card.Text>
              <span> Ingredients:</span> {recipes[1].ingredients}
            </Card.Text>
            <Card.Text>Cooking method: {recipes[1].method}</Card.Text>
            <Card.Text className="mb-5">
              Ratings: {recipes[1].ratings}
            </Card.Text>
            <Button
              className="me-0 btn-recipe mb-2 bg-danger"
              variant="primary">
              Favorite
            </Button>
          </Card.Body>
        </Card>
        <Card className="bg-warning">
          <Card.Body className="btn-container">
            <Card.Title>{recipes[2].name}</Card.Title>
            <Card.Text>
              <span> Ingredients:</span> {recipes[2].ingredients}
            </Card.Text>
            <Card.Text>Cooking method: {recipes[2].method}</Card.Text>
            <Card.Text className="mb-5">
              Ratings: {recipes[2].ratings}
            </Card.Text>
            <Button className="btn-recipe mb-2 bg-danger" variant="primary">
              Favorite
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default ChefDetails;
