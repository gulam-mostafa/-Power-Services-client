import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
           <h1>this is blog </h1>
            <Link to='/home'>Go to Home</Link>
        </div>
    );
};

export default Blog;