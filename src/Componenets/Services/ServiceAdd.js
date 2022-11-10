import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTitleDi } from '../../hooks/useTitleDi';

const ServiceAdd = () => {
    useTitleDi('Add Service')
    const [user, setUser] = useState();

    const handleAddUser = event => {
        event.preventDefault();
        console.log(user)
        fetch('https://b6-a11-service-review-server-side.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())

            .then(data => {

                setTimeout(function () {
                    window.location.href = '/';
                }, 3000);

                toast("Insert successfully", {
                    position: toast.POSITION.TOP_CENTER
                });
                console.log(data)

            })
    }
    const HandleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { createdAt: new Date().toISOString(), ...user, }
        newUser[field] = value;
        setUser(newUser)
    };
    return (
        <div className='w-full m-auto '>
            <h1 className='text-center text-3xl text-orange-400 my-4'>Please Add More Service. Make sure service Add very Carefully.</h1>

            <br />
            <form onSubmit={handleAddUser} action="" className='lg:w-1/2 w-11/12  m-auto ' >

                <p className='text-red-600'>1. Id "Service Number"</p>
                <input onBlur={HandleInputBlur} type="text" placeholder="Id" name='id (id Means Service Number)' className="input input-bordered input-warning w-full mx-1 p-1 " />

                <p className='text-red-600'>2. Total Service done"</p>
                <input onBlur={HandleInputBlur} type="text" placeholder="total service done" name='total' className="input input-bordered input-warning w-full mx-1 p-1 " />
                <p className='text-red-600'>3. service Type new or Old</p>
                <input onBlur={HandleInputBlur} type="text" placeholder="types" name='types' className="input input-bordered input-warning w-full mx-1 p-1 " />
                <p className='text-red-600'>4. Service related Image URL</p>
                <input onBlur={HandleInputBlur} type="text" placeholder="img" name='img' className="input input-bordered input-warning w-full mx-1 p-1 " />
                <p className='text-red-600'>5. Service Cost</p>
                <input onBlur={HandleInputBlur} type="text" placeholder="price" name='price' className="input input-bordered input-warning w-full mx-1 p-1 " />
                <p className='text-red-600'>6. Service Rating</p>
                <input onBlur={HandleInputBlur} type="text" placeholder="rating" name='rating' className="input input-bordered input-warning w-full mx-1 p-1 " />

                <p className='text-red-600'>7. Service Description</p>
                <input onBlur={HandleInputBlur} type="text" placeholder="description" name='description' className="input input-bordered input-warning w-full mx-1 p-1 " />
                <p className='text-red-600'>8. Service Title or name</p>
                <input onBlur={HandleInputBlur} type="text" placeholder="Title" name='title' className="input input-bordered input-warning w-full mx-1 p-1 " />
                <br />
                <button type='submit' className="btn btn-primary w-full mx-1 my-3 p-1 ">Add Service</button>

                <ToastContainer />
            </form>
        </div>
    );
};

export default ServiceAdd;