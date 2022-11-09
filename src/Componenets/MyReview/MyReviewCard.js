import React from 'react';
import { Link } from 'react-router-dom';
import './MyreviewCard.css'
import { ToastContainer, toast } from 'react-toastify';
import img from './rose.png'

const MyReviewCard = ({ comment, handleDelete }) => {
    const { serviceName, price, email, title, img, message, displayName, photoURL, _id } = comment;



    return (
        <div className='lg:w-1/2 flex justify-between m-auto bg-yellow-100 mb-6 rounded-xl'>

            <article className=''>
                <div className="flex  items-center mb-4 space-x-4">

                    <img className='cusphoto ml-4 mt-4' src={photoURL} alt="" />
                    <div className="space-y-1 font-medium dark:text-red-400">
                        <p>{displayName} <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">{email}</time></p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <p className="mb-2 font-light text-gray-500 dark:text-black font-semibold px-2 py-4">Review For: <span className='text-xl text-blue-400'>{serviceName}</span> price: $ <span className='text-xl text-blue-400'>{price}</span> </p>
                    <img className='cusphoto' src={img} alt={img} />
                </div>
                <p className="mb-2 font-light text-gray-500 dark:text-black font-semibold px-2 py-4">{message} </p>
            </article>
            <div className='flex'>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline mr-3 mt-2 btn-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    <ToastContainer />
                </button>
                <Link to={`/update/${_id}`}>  <input type="reset" value="Edit" className="btn mr-3 mt-2 btn-xs" /></Link>
            </div>
        </div>
    );
};

export default MyReviewCard;