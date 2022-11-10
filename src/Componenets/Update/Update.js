import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useTitleDi } from '../../hooks/useTitleDi';

const Update = () => {
  const { user, } = useContext(AuthContext)
  // const { uid} = user
  useTitleDi('Update')
  const review = useLoaderData();

  console.log(review)
  const [users, setUser] = useState(review)
 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/myreview";

  const updateReview = event => {

    event.preventDefault();
    // console.log(user)
    fetch(`https://b6-a11-service-review-server-side.vercel.app/myreview/${review._id}`,
      {
        method: "PUT",
        headers: {
          'content-type': "application/json"
        },
        body: JSON.stringify(users)
      })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {

          toast("Updated successfully", {
            position: toast.POSITION.TOP_CENTER
          });
          alert('Updated successfully')
          navigate(from, { replace: true });
        }

      })

  }

  const handleInputChange = event => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...users }
    newUser[field] = value;
    setUser(newUser);
  }
  return (
    <div className=' m-auto w-10/12 mt-5'>
      <form className='  ' onSubmit={updateReview}>
        <textarea onChange={handleInputChange} name='message' defaultValue={review.message} className="textarea textarea-accent w-full " placeholder="Please write a Review"></textarea>

        <br />

        <input className="btn btn-active btn-accent w-full " type="submit" value="Update Your Review" />

        <ToastContainer />
      </form>



    </div>
  );
};

export default Update;