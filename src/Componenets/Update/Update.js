import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTitleDi } from '../../hooks/useTitleDi';

const Update = () => {
  useTitleDi('Update')
    const  review = useLoaderData();
    console.log(review)
    const [user, setUser] = useState(review)

    const updateReview =event => {
        event.preventDefault();
        // console.log(user)
        fetch(`http://192.168.1.101:5000/myreview/${review._id}`,
        {
          method: "PUT",
          headers: {
            'content-type' : "application/json"
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
              toast("Updated successfully" , {
                position: toast.POSITION.TOP_CENTER
              });
         
            }
            console.log(data)
        })
       
    }

    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div className=' m-auto w-10/12 mt-5'>
             <form className='  ' onSubmit={updateReview}>
          <textarea onChange={handleInputChange} name='message' defaultValue={review.message} className="textarea textarea-accent w-full " placeholder="Please write a Review"></textarea>
  
            <br />
  
            <input className="btn btn-active btn-accent w-full " type="submit" value="Update Your Review"  />
  
            <ToastContainer />
          </form>
        </div>
    );
};

export default Update;