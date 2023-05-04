import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import './Chefs.css'
import ChefDetails from '../../ChefDetails/ChefDetails/ChefDetails';

const Chefs = () => {
    const [chefs,setChefs]=useState([]);

      useEffect(() => {
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data =>  setChefs(data))
        .catch(error => console.log(error))
      },[])
    return (
        <div className='chefs'>
            {chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)}
            
        </div>
    );
};

export default Chefs;