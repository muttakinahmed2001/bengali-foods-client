import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import './Chefs.css'
 

const Chefs = () => {
    const [chefs,setChefs]=useState([]);

      useEffect(() => {
        fetch('https://assignment-10-server-muttakinahmed2001.vercel.app/chefs')
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