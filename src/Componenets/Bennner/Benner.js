import React from 'react';

import img1 from './img/air-condition.jpg'
import img2 from './img/refrigaratopr.png'
import img3 from './img/fan.png'
import img4 from './img/refrigaratopr.png'
import img5 from './img/tvrepair.png'
import img6 from './img/air-condition.jpg'
import BannerItem from './BannerItem';


const BannerData = [
    {
      image: img1,
      prev: 6,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: img4,
      prev: 3,
      id: 4,
      next: 5,
    },
    {
      image: img5,
      prev: 4,
      id: 5,
      next: 6,
    },
    {
      image: img6,
      prev: 5,
      id: 6,
      next: 1,
    },
  ];
const Benner = () => {
    return (
        <div>
           <div className="carousel w-full py-10 ">
      {BannerData.map((slide) => (
        <BannerItem key={slide.id} slide={slide}></BannerItem>
      ))}

      {/* <BannerItem image={img1}></BannerItem> */}

      
    </div>


    

        </div>
    );
};

export default Benner;