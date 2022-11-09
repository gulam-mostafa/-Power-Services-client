import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivetRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <h1 className='text-center'> <button className="btn btn-square loading">Loading ...</button></h1>
    }
    if(user){
        return children
       
    }
    
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivetRoutes;