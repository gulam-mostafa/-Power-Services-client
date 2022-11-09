import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const LimitCard = ({service}) => {
    const {types, title, img, price , rating , description, _id, } = service
    return (
        <div className="card w-80 bg-base-100 shadow-xl m-auto ">


<PhotoProvider>
      <PhotoView  src={img}>
      <figure><img src={img} alt="Shoes" /></figure>
      </PhotoView>
    </PhotoProvider>


        <div className="card-body">
          <h2 className="card-title">
           {title}
            <div className="rounded-xl  badge-secondary">{types}</div>
          </h2>
          <p>{description.slice(0, 100) + ' ...'}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">Rating {rating}</div> 
            <div className="badge badge-outline">Cost $ {price}</div>
            
          </div>
        <Link to={`/detailspage/${_id}`}>  
        <button className="btn btn-outline btn-accent">Details</button></Link>
        </div>
      </div>
    );
};

export default LimitCard;