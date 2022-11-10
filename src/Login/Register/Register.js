import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Button } from 'react-daisyui';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import signUp from './sign_up.png'
import { useTitleDi } from '../../hooks/useTitleDi';

const Register = () => {
  useTitleDi('Sign up')
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { providerLogin, updateUserProfile, logOut } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProbider = new GithubAuthProvider();

  const handleGithubSignIn = () => {
    providerLogin(githubProbider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        console.log(user?.email);
        console.log(user.email);
        if (user.email == null) {
          logOut()
          return alert(' Email not Found from Git Hub')


        }

        const currentUser = {
          email: user.email
        }
        console.log(currentUser);
        setError("");
        // get jwt toket 
        fetch('https://b6-a11-service-review-server-side.vercel.app/jwt', {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            localStorage.setItem('token', data.token)
          })
        //end jwt token
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const currentUser = {
          email: user.email
        }
        console.log(currentUser);
        setError("");
        // get jwt toket 
        fetch('https://b6-a11-service-review-server-side.vercel.app/jwt', {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            localStorage.setItem('token', data.token)
          })
        //end jwt token



        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error, error.message));
  };
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photoURL, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user.photoURL);
        form.reset();
        setError("");
        const currentUser = {
          email: user.email
        }
        console.log(currentUser);
        setError("");
        // get jwt toket 
        fetch('https://b6-a11-service-review-server-side.vercel.app/jwt', {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            localStorage.setItem('token', data.token)
          })
        //end jwt token
        navigate(from, { replace: true });
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => { })
      .catch((e) => console.error(e));
  };

  const handleAccept = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div className='bg-base-100 '>
      <div className="hero  bg-base-100 " >
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-justify lg:text-left -full lg:w-1/2 m-2">
            <img src={signUp} alt="" />
            <p className="py-6 w-1/ text-2xl text-green-500 ">A residential electrician is the most common type of electrician. They are typically responsible for installing, troubleshooting, maintaining, and upgrading electrical systems - this includes equipment in residential settings like homes, apartments, and condominiums.</p>
          </div>
          <div className="card flex-shrink-0 w-full text-white max-w-sm shadow-2xl bg-base-200">
            <h1 className="text-5xl text-center font-bold">Login now!</h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text ">PhotoURL</span>
                </label>
                <input type="text" placeholder="PhotoURL" name="photoURL" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input type="text" placeholder="email" name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" />

              </div>
              <div className="form-control mt-6">
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <span className="label-text">Accept <Link className='text-blue-400 underline' to='/terms' >Terms And Condition</Link></span>
                    <input onClick={handleAccept} type="checkbox" className="checkbox checkbox-success" />
                  </label>
                </div>

                <button className="btn btn-primary" disabled={!accepted}>Sign Up</button>
                <label className="label">
                  <h1 className="">Already Sign Up? please <Link className='text-blue-400 label-text-alt link link-hover text-xl' to='/login'>Login</Link></h1>
                </label>
              </div>
              <h1 className='text-center text-green-600 font-bold text-2xl'>OR </h1>
              <Button
                className="me-3"
                onClick={handleGoogleSignIn}
                variant="info"
                type=""
                disabled={!accepted}
              >
                {" "}
                <span className="mr-2 ">
                  <FcGoogle />{" "}
                </span>
                Google
              </Button>
              <Button
                onClick={handleGithubSignIn}
                className="btn btn-danger"
                type="button"
                variant="info"
                disabled={!accepted}
              >
                {" "}
                <span>
                  <FaGithub />{" "}
                </span>
                Github
              </Button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;