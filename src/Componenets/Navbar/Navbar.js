import React from 'react';
import { Link } from 'react-router-dom';
import svg from './svg1.png'
import './Navbar.css'
import Main from '../Main/Main';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Button } from 'react-daisyui';
import { FcManager } from "react-icons/fc";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar bg-violet-900 ">

        <div className="navbar-start ">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost md:hidden  ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-black rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-500 text-black font-bold rounded-box w-52">
              <li><Link to='/home' className='text-red-400'>Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <Link to='/myreview' className='no-underline mx-2 text-xl   rounded px- my-1 hover:bg-gray-600 text-orange-500  '>Review</Link>
              <Link to='/serviceadd' className='underline mx-2 text-xl  text-orange-500   rounded px- my-1 hover:bg-gray-600'>Add_Services</Link>
              <div className='flex flex-col m-auto'>
                {user?.photoURL ? (
                  <img
                    style={{ height: "40px", width: '40px' }}
                    className='rounded'
                    src={user?.photoURL}
                    alt=''
                  ></img>
                ) : (
                  <div className='m-auto'><FcManager /></div>
                )}
                {user?.uid ? (
                  <Link className='flex flex-col'>
                    <span className="text-white">{user?.displayName}</span>
                    <Button className='btn btn-active btn-accent' onClick={handleLogOut}>LogOut</Button>
                  </Link>
                )
                  :
                  (
                    <div className='flex'>

                      <li><Link to='/login' className='text-red-400'>Login</Link></li>
                      <li><Link to='/register' className='text-red-400'>Sign up</Link></li>
                    </div>
                  )
                }
              </div>
            </ul>
          </div>

          <Link to='/' className="btn btn-ghost text-green-500  normal-case lg:text-4xl   no-underline text-2xl md:text-4xl">Power Services</Link>
          <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-electrical-energy-ecology-flaticons-lineal-color-flat-icons.png" />

        </div>

        <div className='flex w-full justify-between'>

          {/* for destopp  */}
          <div className="navbar-center hidden  md:flex text-black font-semibold bg-red-00  ">
            <ul className="menu menu-horizontal p-0 text-xl ml-32">

              <div className='flex flex-row align-center justify-center'>
                {user?.photoURL ? (
                  <img className='rounded-xl mx-2'
                    style={{ height: "40px", width: "40px" }}

                    src={user?.photoURL}
                    alt={<FcManager />}
                  ></img>

                ) : (
                  <div className='m-auto'><FcManager /></div>
                )}
                {user?.uid ? (
                  <Link className='flex flex-col'>
                    <span className="text-white mx-2 ">{user?.displayName}</span>
                    <button className='text-blue-500' onClick={handleLogOut}>LogOut</button>
                  </Link>
                )
                  :
                  (
                    <div className='flex'>
                      <li><Link to='/login' className='text-red-400'>Login</Link></li>
                      <li><Link to='/register' className='text-red-400'>Sign up</Link></li>
                    </div>
                  )
                }
              </div>
            </ul>
          </div>
        </div>

      
        <div className='m-auto cusFlex hidde '>

        {user?.uid ? (
          <div className='flex '>
            <Link to='/myreview' className='underline mx-2 text-xl   rounded px- my-1 hover:bg-gray-600 text-orange-500  '>My_Review</Link>
            <Link to='/serviceadd' className='underline mx-2 text-xl  text-orange-500   rounded px- my-1 hover:bg-gray-600'>Add_Services</Link>
          </div>
        )
          :
          (
            <div className='flex'>
              <h2></h2>
            </div>
          )
        }

          <div>
            <Link to="/home" className='no-underline mx-2 text-xl  text-blue-400 font-bold  rounded px- my-1 hover:bg-gray-600'>Home</Link>



            <Link to='/services' className='no-underline mx-2 text-xl  text-orange-500    rounded px- my-1 hover:bg-gray-600'>Services</Link>
            <Link to='blog' className='no-underline mx-2 text-xl  text-orange-500    rounded px- my-1 hover:bg-gray-600'>Blog</Link>
          </div>


          {/* <Link to='/myreview' className='no-underline mx-2 text-xl   rounded px- my-1 hover:bg-gray-600 text-orange-500  '>Review</Link> */}

          <div>
            {/* <Link to='/serviceadd' className='underline mx-2 text-xl  text-orange-500   rounded px- my-1 hover:bg-gray-600'>Add_Services</Link> */}

            {/* <Link to='blog' className='no-underline mx-2 text-xl  text-orange-500    rounded px- my-1 hover:bg-gray-600'>Blog</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;