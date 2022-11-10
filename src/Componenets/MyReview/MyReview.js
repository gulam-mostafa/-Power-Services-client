import { data } from 'autoprefixer';
import { comment } from 'postcss';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTitleDi } from '../../hooks/useTitleDi';
import { Link } from 'react-router-dom';
import { Button } from 'react-daisyui';

const MyReview = () => {
    useTitleDi('MyReview')
    const { user, logOut, } = useContext(AuthContext)
    const [review, setReview] = useState([])
    const [loading, setLoading] = useState(true)

    console.log(review)

    useEffect(() => {
        fetch(`https://b6-a11-service-review-server-side.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => {
                setLoading(false);
                setReview(data)})


    }, [user?.email])

    const handleDelete = id => {
        const sureDelete = window.confirm("Are Your Sure, you want delete")
        if (sureDelete) {
            fetch(`https://b6-a11-service-review-server-side.vercel.app/myreview/${id}`,
                {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                   
                    if (data.deletedCount > 0) {
                        // alert(" delete successfully")
                        toast("delete successfully", {
                            position: toast.POSITION.TOP_CENTER
                        });
                        const remaning = review.filter(revw => revw._id !== id)
                        setReview(remaning)
                        
                    }


                })



        }
    }
    if(loading){
        return <h1 className='text-center'> <button className="btn  loading">Loading ...</button></h1>
    }

    return (
        <div className='m-auto'>
            <div className="users">

            {review?.length === 0 ? (
                   <div className='flex justify-center align-center'>  <h2 className='text-4xl mt-32 text-violet-600'> You Have No Review  </h2></div>
                )
                    :
                   <div>
                   
                     <h1 className='text-green-400 text-4xl text-center underline my-4'>Here is my {review.length} Reviews</h1>

                   </div>
                }

                {review.map(comment => <MyReviewCard
                    key={comment._id}
                    comment={comment}
                    handleDelete={handleDelete}
                ></MyReviewCard>)}

                <div className='w-1/2 m-auto mt-20'>
                   
                    <Link to='/services' className='w-full m-auto flex justify-center'> <Button className='btn  ' >Services</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyReview;