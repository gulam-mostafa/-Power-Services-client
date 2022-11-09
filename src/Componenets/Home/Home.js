import React from 'react';

import Benner from '../Bennner/Benner';
import LimitData from './Limitdata/LimitData';

const Home = () => {
    return (
        <div className='bg-white'>
          <Benner></Benner>
            
          {
             <h1><LimitData></LimitData> </h1>
          }
        
        
        </div>
    );
};

export default Home;