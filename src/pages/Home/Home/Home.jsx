import React from 'react';
import banner from '../../../assets/hilisha.jpg'
import './Home.css'
import Chefs from '../Chefs/Chefs';
 

const Home = () => {
    return (
    <div><div className=' d-flex gap-4 align-items-center  bg-warning'>

    <img className='banner  ' src={banner} alt="" />
    <div className='text-center mt-4 '>
      <h1 className='title '>Test the Bengali foods</h1>
      <h4 >with the touch of the best chefs of Bangladesh</h4>
    </div>

  </div>
  <div className='mt-5'>
    <h1 className='text-center mt-3 mb-5'>6 well known chefs of Bangladesh</h1>
  <Chefs></Chefs>
  </div>
  </div>
        
    );
};

export default Home;