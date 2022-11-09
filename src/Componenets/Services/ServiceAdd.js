import React from 'react';
import { useState } from 'react';

const ServiceAdd = () => {
    const [user, setUser] = useState();
    const handleAddUser = event => {
        event.preventDefault();
        console.log(user)
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
        .then(res=> res.json())
        .then(data => {
            
            console.log(data)
        })

    }
    const HandleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser)

    }

    return (
        <div>
            <h1 className='text-center text-3xl text-white my-4'>Please Add More Service. Make sure service Add very Carefully.</h1>

<div className='flex justify-center my-4'>

            
<br />
<form onSubmit={handleAddUser} action="" className='w-1/2' >
    
    <p className='text-red-600'>1. Id "Service Number"</p>
    <input onBlur={HandleInputBlur} type="text" placeholder="Id" name='id (id Means Service Number)' className="input input-bordered input-warning w-10/12 m-1 p-1 " />
    <p className='text-red-600'>2. Total Service done"</p>
    <input onBlur={HandleInputBlur} type="text" placeholder="total service done" name='total' className="input input-bordered input-warning w-10/12 m-1 p-1 " />
    <p className='text-red-600'>3. service Type new or Old</p>
    <input onBlur={HandleInputBlur} type="text" placeholder="types" name='types' className="input input-bordered input-warning w-10/12 m-1 p-1 " />
    <p className='text-red-600'>4. Service related Image URL</p>
    <input onBlur={HandleInputBlur} type="text" placeholder="img" name='img' className="input input-bordered input-warning w-10/12 m-1 p-1 " />
    <p className='text-red-600'>5. Service Cost</p>
    <input onBlur={HandleInputBlur} type="text" placeholder="price" name='price' className="input input-bordered input-warning w-10/12 m-1 p-1 " />
    <p className='text-red-600'>6. Service Rating</p>
    <input onBlur={HandleInputBlur} type="text" placeholder="rating" name='rating' className="input input-bordered input-warning w-10/12 m-1 p-1 " />

    <p className='text-red-600'>7. Service Description</p>
    <input onBlur={HandleInputBlur} type="text" placeholder="description" name='description' className="input input-bordered input-warning w-10/12 m-1 p-1 " />
    <p className='text-red-600'>8. Service Title or name</p>
    <input onBlur={HandleInputBlur} type="text" placeholder="Title" name='title' className="input input-bordered input-warning w-10/12 m-1 p-1 " />

    {/* <input onBlur={HandleInputBlur} type="text" placeholder="Title" name='title' className="input input-bordered input-warning w-10/12 m-1 p-1 " /> */}
<br />
    <button type='submit' className="btn btn-primary w-10/12 m-1 p-1 ">Add Service</button>


</form>
</div>
        </div>
    );
};

export default ServiceAdd;