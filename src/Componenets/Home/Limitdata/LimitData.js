import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LimitCard from './LimitCard';

const LimitData = () => {
    const [services , setServices] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://192.168.1.101:5000/servicesthree')
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setServices(data)
        }) 
    })

    if(loading){
        return <h1 className='text-center'> <button className="btn  loading">Loading ...</button></h1>
    }

    return (
        <div>
        <h2 className='text-center text-3xl font-bold text-orange-400'>Our  services  </h2>
      <div className='grid grid-cols-1 m-auto md:grid-cols-2 lg;grid-cols-3 xl:grid-cols-3 mx-2 gap-2 '>
      {
            services.map(service => <LimitCard
                service={service}
                key={service._id}></LimitCard>)
        }
      </div>
   <Link to='/services' className='flex justify-center'>   <button className="btn btn-active btn-secondary w-1/4 my-4 mx-4 m-auto">See More Services</button></Link>
    </div>
    );
};

export default LimitData;