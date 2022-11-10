import React from 'react';
import { useTitleDi } from '../../hooks/useTitleDi';

import Benner from '../Bennner/Benner';
import LimitData from './Limitdata/LimitData';

const Home = () => {
  useTitleDi('Home')
  return (
    <div className='bg-white'>
      <Benner></Benner>

      {
        <h1><LimitData></LimitData> </h1>
      }

 <div className='mx-4 py-4 '>
 <div className="card lg:card-side bg-base-100 shadow-xl py-32">
  <figure className='lg:w-1/2'><img src="https://i.ibb.co/8K90mKN/bulb-section.png" alt="Album"/></figure>
    <div className=" flex flex-col justify-between align-middle  ">
    <h2 className="text-4xl my-3 mb-8 mx-8 font-bold">Need a reliable electrician to save the day?</h2>
    <p className='my-2 mx-8'> MYES provides safe and professional electrical services in Melbourne. We are available for all types of electrical work, big or small.  All work is performed by A grade electricians and quality is guaranteed.</p>
    <h1 className='text-xl mx-8 mb-8'>YOUR <span className='text-green-400 '>LOCAL</span> MELBOURNE ELECTRICIAN</h1>

    <p className='mx-8 text-orange-400 '>As a local business, we know the importance of our reputation and building trust with our customers. Whether you're hoping to install a new split system air conditioning, overhaul your wiring, or need a switchboard upgrade, you can be rest assured that we are fully licensed and highly qualified to tackle any electrical issues you may have. We are electrician who service all across Melbourne from Camberwell, Moorabbin, Brighton to Toorak.  </p>

    <div className="card-actions justify-end">
    </div>
  </div>
</div>
 </div>
        {/* section 2 */}
      <div className=' py-4'>
      <div className="card w-10/12 m-auto glass">
  <figure><img src="https://i.ibb.co/RcxDLH4/e-tools.png" alt="car!"/></figure>

 <div className="card-body ">
    <h2 className="card-title text-yellow-800">What is electrical troubleshooting?</h2>
    <p className='text-yellow-400'>Electrical troubleshooting is the process of analyzing the behavior or operation of a faulty electrical circuit to determine what is wrong with the electrical circuit. Troubleshooting then involves identifying the defective electrical component(s) and repairing the circuit. Sometimes electrical problems are easily diagnosed and the problem component easily visible. Other times the symptoms as well as the faulty component can be difficult to diagnose. A defective plug with visual signs of burning should be easy to spot, whereas an intermittent problem caused by a high resistance connection can be much more difficult to find..</p>
    <div className="card-actions justify-end">
      
    </div>
 </div>

</div>
      </div>


    </div>
  );
};

export default Home;