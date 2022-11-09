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

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [review, setReview] = useState([])
    console.log(review)
    useEffect(() => {
        fetch(`http://192.168.1.101:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))


    }, [user?.email])

    const handleDelete = id => {
        const sureDelete = window.confirm("Are Your Sure, you want delete")
        if (sureDelete) {
            fetch(`http://192.168.1.101:5000/myreview/${id}`,
                {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.deletedCount > 0) {
                        // alert(" delete successfully")
                        toast("delete successfully" , {
                            position: toast.POSITION.TOP_CENTER
                          });
                        const remaning = review.filter(revw => revw._id !== id)
                        setReview(remaning)
                    }


                })



        }
    }


    return (
        <div className='m-auto'>
            <div className="users">
                <h1 className='text-green-400 text-4xl text-center underline my-4'>Here is my all Reviews</h1>
                {review.map(comment => <MyReviewCard
                    key={comment._id}
                    comment={comment}
                    handleDelete={handleDelete}
                ></MyReviewCard>)}
            </div>
        </div>
    );
};

export default MyReview;