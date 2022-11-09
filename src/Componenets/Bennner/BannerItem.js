import React from 'react';
import { Link } from 'react-router-dom';
import "./BannerItem.css";

const BannerItem = ({slide}) => {
const {image, id, prev, next} = slide

    return (
        <div id={`slide${id}`}className="carousel-item relative w-full">
        <div className="cariusel-img  m-auto">
        <img src={image} className="w-full rounded-xl" />
        </div>

        <div className="absolute flex powerService justify-end transform -translate-y-1/2 left-24  top-1/4 ">
          <h2 className="text-6xl font-bold text-green-400 powerColor">
            Power Services 
          </h2>
        </div>

        <div className="absolute flex justify-center transform -translate-y-1/2 left-24  top-1/2 cusWidth  ">
          <p className="text-xl hiddenText font-bold  text-white">
          Furnishing includes everything that you put into your home including furniture, the fabric for the curtains and cushions, the decorative items used to embellish your home etc. … Home furnishing and decoration should be done according to your budget.
          </p>
          
        </div>
       

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5  bottom-0">
          <div><a href={`#slide${prev}`}className="btn btn-circle mr-5">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a></div>
          <Link to='/services'><button className="btn btn-info">Let's See</button></Link>
        </div>
        
      </div>
    );
};

export default BannerItem;