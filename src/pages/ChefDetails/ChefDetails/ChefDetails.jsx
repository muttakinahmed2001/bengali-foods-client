import React  from 'react';
import { Button, Card } from 'react-bootstrap';
import {   useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = ( ) => {
   const chef = useLoaderData()
   console.log(chef)
 
    
    return (
        <Card >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title> </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card  content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
};

export default ChefDetails;