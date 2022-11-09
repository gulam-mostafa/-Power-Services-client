import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import PeopleReviews from '../PeopleReviews/PeopleReviews';
import WriteReview from '../WriteReview/WriteReview';

const DetailsPage = () => {
  const service = useLoaderData()
  const { title, _id, id, total, types, img, price, rating, description, } = service
  const { user } = useContext(AuthContext)
  console.log(user?.uid)


  
  return (
    <div className='py-2'>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className=' '><img className='object-fill' src={img} alt="Album" /></figure>

        <div className=" m-4 lg:w-3/5  xl:w-3/5  w-full">
          <h2 className=" py-3 text-orange-500 font-semibold text-4xl text-center ">{title}</h2>
          <p className="text-green-500 text-xl mb-4">{description}</p>
          <h1 className='font-bold'>This Service Rating <span className='text-yellow-400'>{rating}</span></h1>
          <h1>This Service Cost <span className='text-yellow-400'> $ {price}</span></h1>
          <h1>Total<span className='text-yellow-400'>  {total} </span>Services completed</h1>
          <h2>Service Number <span>{id}</span></h2>

          <Link to='/' className="card-actions justify-center">
            <button className="btn btn-primary">Home</button>
          </Link>
        </div>
      </div>
      {/* peoples reviews  */}
      <div>
        <PeopleReviews
        serviceId={_id}
        ></PeopleReviews>
      </div>
      <div className='flex justify-center '>
      {
        user?.uid? (
          
            <WriteReview></WriteReview>
          
        ):(
         <div className='flex flex-col justify-center  w-full  align-center m-auto'>
          <h2 className='text-blue-500 text-5xl m-auto my-4 font-bold '>You can add Review after log in!</h2>
          <Link className='m-auto  my-4' to='/login'><button className="btn btn-warning text-3xl px-32">Please Log in</button></Link>

         </div>
        )

      }
       
      </div>


    </div>

  );
};

export default DetailsPage;