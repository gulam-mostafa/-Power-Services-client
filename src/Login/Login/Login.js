import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-daisyui';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import logImg from './login .png'
import { useTitleDi } from '../../hooks/useTitleDi';



const Login = () => {

  useTitleDi('Login')
  const [error, setError] = useState("");
  // console.log(error);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { providerLogin, logOut } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProbider = new GithubAuthProvider();

  const handleGithubSignIn = () => {
    providerLogin(githubProbider)
      .then((result) => {
        const user = result.user;
        if (user?.email === null) {
          logOut()
          return alert('Email not Found from Git Hub')
        }

        console.log(user);

        // jwt token 
        const currentUser = {
          email: user.email
        }
        console.log(currentUser);
        setError("");
        // get jwt token 
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

        // jwt token 
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
            navigate(from, { replace: true });
          })
        //end jwt token

        
      })
      .catch((error) => console.log(error));
  };
  const { signIn } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email
        }



        console.log(currentUser);
        form.reset();
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

        navigate(from, { replace: true });
      })
      .catch((e) => {
        console.error(e);

        console.error(e.message);

        setError(e.message);
      });
  };


  return (
    <div className='bg-base-100 '>
      <div className="hero  bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-justify  lg:text-left -full lg:w-1/2 m-2">
            <img src={logImg} alt="" />
            <p className="py-6 text-2xl text-emerald-500 ">  A residential electrician is the most common type of electrician. They are typically responsible for installing, troubleshooting, maintaining, and upgrading electrical systems - this includes equipment in residential settings like homes, apartments, and condominiums.</p>
          </div>
          <div className="card flex-shrink-0 w-full text-white max-w-sm shadow-2xl bg-base-200">
            <h1 className="text-5xl text-center font-bold">Login now!</h1>
            <form onSubmit={handleSubmit} className="card-body">
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
                <label className="label">
                  <Link to="/home" className="label-text-alt link link-hover"></Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <label className="label">
                  <h1 className="">New to site? please <Link className='text-blue-400 label-text-alt link link-hover text-xl' to='/register'>Sign Up</Link></h1>
                </label>
                <h1 className='text-center text-green-600 font-bold text-2xl'>OR </h1>
                <Button
                  className="me-3 mb-4 "
                  onClick={handleGoogleSignIn}
                  variant="info"
                  type=""

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

                >
                  {" "}
                  <span>
                    <FaGithub />{" "}
                  </span>
                  Github
                </Button>

                <p className="text-red-500">{error.slice(9,)}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;