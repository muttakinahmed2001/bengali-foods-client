 
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import {   useLoaderData  } from 'react-router-dom';
import './ChefDetails.css'

const ChefDetails = ( ) => {
   const chef = useLoaderData()
   console.log(chef)
   const {name,picture,likes,bio,numRecipes,experience,recipes, }=chef;
  
    
    return (
        <Container><Card className='border chef-container' >
        <Card.Img style={{height: '300px' ,width:'200px'}} variant="top" src={picture} />
        <div></div>
        <Card.Body>
          <Card.Title> {name}</Card.Title>
          <Card.Text>
             {bio}
          </Card.Text>
          <Card.Text>
            Likes: {likes}
          </Card.Text>
          <Card.Text>
            Number of recipes:  {numRecipes}
          </Card.Text>
          <Card.Text>
              Year of experience: {experience}
          </Card.Text>
        
        </Card.Body>
      </Card>

      {/* recopies */}

      <CardGroup className='mt-5 p-5'>
      <Card className='me-5 bg-warning'>
        
        <Card.Body className='btn-container'>
          <Card.Title>{recipes[0].name}</Card.Title>
          <Card.Text>
            <span> Ingredients:</span> {recipes[0].ingredients}
          </Card.Text>
          <Card.Text>
              Cooking method: {recipes[0].method}
          </Card.Text>
          <Card.Text className='mb-5'>
              Ratings: {recipes[0].ratings}
          </Card.Text>
          <Button   className='btn-recipe bg-danger' variant="primary">Favorite</Button>
        </Card.Body>
         
      </Card>
      <Card className='me-5 bg-warning'>
        
      <Card.Body  className='btn-container'>
          <Card.Title>{recipes[1].name}</Card.Title>
          <Card.Text>
            <span> Ingredients:</span> {recipes[1].ingredients}
          </Card.Text>
          <Card.Text>
              Cooking method: {recipes[1].method}
          </Card.Text>
          <Card.Text className='mb-5' >
              Ratings: {recipes[1].ratings}
          </Card.Text>
          <Button  className='me-0 btn-recipe bg-danger' variant="primary">Favorite</Button>
        </Card.Body>
         
        
      </Card>
      <Card className='bg-warning'>
        
      <Card.Body  className='btn-container'>
          <Card.Title>{recipes[2].name}</Card.Title>
          <Card.Text>
            <span> Ingredients:</span> {recipes[2].ingredients}
          </Card.Text>
          <Card.Text>
              Cooking method: {recipes[2].method}
          </Card.Text>
          <Card.Text className='mb-5'>
              Ratings: {recipes[2].ratings}
          </Card.Text>
          <Button  className='btn-recipe bg-danger' variant="primary">Favorite</Button>
        </Card.Body>
         
         
      </Card>
    </CardGroup>
      </Container>
        
    );
};

export default ChefDetails;