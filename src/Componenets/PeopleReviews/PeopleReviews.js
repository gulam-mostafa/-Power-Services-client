import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PeopleReviews = ({ serviceId }) => {

    const { user } = useContext(AuthContext)

    const [review, setReview] = useState([])


    useEffect(() => {
        fetch(`https://b6-a11-service-review-server-side.vercel.app/review/${serviceId}`)
            .then(res => res.json())
            .then(data =>
                setReview(data)
            )
    }, [serviceId])
   

    return (
        <div className='w-10/12  m-auto border border-red -400  my-4 rounded-xl'>
            <div className='border'>
                {review.map(comment =>
                    <div>
                        <article className=''>
                            <div className="flex border border-lime-200 m-1 rounded items-center mb-4 space-x-4">

                                <img className='cusphoto ml-4 mt-4' src={comment.photoURL} alt="" />
                                <div className="space-y-1 font-medium dark:text-red-400">
                                    <p>{comment.displayName} <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">User Email: {comment.email}</time></p>
                                    <p className="mb-2 font-light text-gray-500 dark:text-white font-semibold px-2 py-4">{comment.message}</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-1">

                            </div>


                        </article>
                    </div>

                )}
            </div>



        </div>
    );
};

export default PeopleReviews;