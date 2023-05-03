import React from 'react';
import banner from '../../../assets/hilisha.jpg'
import './Home.css'
 

const Home = () => {
    return (
        <div className=' d-flex gap-4 align-items-center  bg-warning'>

          <img className='banner  ' src={banner} alt="" />
          <div className='text-center mt-4 '>
            <h1 className='title '>Test the Bengali foods</h1>
            <h4 >with the touch of the best chefs of Bangladesh</h4>
          </div>
 
        </div>
    );
};

export default Home;