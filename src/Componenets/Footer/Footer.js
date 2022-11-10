import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div data-theme="valentine">
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          <img src="https://img.icons8.com/plasticine/100/null/light.png" alt="" />
          <p>Power Services.<br />Copy Right@2022</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to='/myreview' className="link link-hover">My Reviews</Link>
          <Link to="serviceadd" className="link link-hover">Service Add</Link>
          <Link to='home' className="link link-hover">Home</Link>
          <Link to='login' className="link link-hover">Log in</Link>
        </div>
        <div>
          <span className="footer-title">Work</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;