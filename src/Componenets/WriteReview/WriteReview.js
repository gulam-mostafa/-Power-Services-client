import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-daisyui';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WriteReview = () => {
    const service = useLoaderData()
    // console.log(service)
  const { title, _id, id, total, types, img, price, rating,  description, } = service
    const { user } = useContext(AuthContext)
 
    // const notify = () => toast("Wow so easy!");
    const writeReview = event => {
        event.preventDefault()
        const form = event.target;
    
        const message = form.message.value;
        const email = user?.email || 'unregistered';
        const displayName = user?.displayName || 'not found';
        const photoURL = user?.photoURL || 'not found';
       
        const review = {

          service: _id,
        createdAt: new Date().toISOString(),
          serviceName: title,
          price,
          email,
          message,
          displayName,
          photoURL,
          img,
        }
        fetch('http://192.168.1.101:5000/reviews', {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(review)
        })
          .then(res => res.json())
          .then(data => {
            if (data.acknowledged) {
              alert('Review Post successfully done')
              form.reset();
            }
            window.location.reload(setTimeout(2000)); 
          })
          .catch(er => console.error(er))
      }

    return (
       
        <div className=' w-1/2  '>
          <form className='' onSubmit={writeReview}>
          <textarea name='message' className="textarea textarea-accent w-10/12 " placeholder="Please write a Review"></textarea>
  
            <br />
  
            <input className="btn btn-active btn-accent w-10/12" type="submit" value="Write A Comment" />
          
            <ToastContainer />
  
  
          </form>
        </div>
    );
};

export default WriteReview;