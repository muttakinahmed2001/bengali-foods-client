import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './Chef.css'
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {

    const {id,name,picture,experience,likes,numRecipes}=chef;
    
    return (
        <div>
            
             
          <Card>
            <Card.Img className='img' variant="top" src={picture} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                 Years of experience:{experience}
              </Card.Text>
              
              <Card.Text>
                 Numbers of recipes:{numRecipes}
              </Card.Text>
              <Card.Text>
                Likes:{likes}
              </Card.Text>
              <Link to={`/chefs/${id}`}>  <Button variant="warning">View recipes</Button></Link>
            
            </Card.Body>
          </Card>
        
           
        </div>
    );
};

export default Chef;