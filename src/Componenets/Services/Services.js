import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useTitleDi } from '../../hooks/useTitleDi';
import ServicesCard from './ServicesCard';

const Services = () => {
    useTitleDi('Services')
    const [loading, setLoading] = useState(true)
    const [services , setServices] = useState([]);
    useEffect(() => {
        fetch('http://192.168.1.101:5000/services')
        .then(res => res.json())
        .then(data => {
            
            setServices(data)
            setLoading(false);
        })
       
    })

    if(loading){
        return <h1 className='text-center'> <button className="btn  loading">Loading ...</button></h1>
    }
    return (
        <div>
            <h2 className='text-center text-3xl font-bold text-orange-400'>Our total {services.length} services  </h2>
          <div className='grid grid-cols-1 m-auto md:grid-cols-2 lg;grid-cols-3 xl:grid-cols-3 mx-2 gap-2 '>
          {
                services.map(service => <ServicesCard
                    service={service}
                    key={service.id}></ServicesCard>)
            }
          </div>
        </div>
    );
};

export default Services;