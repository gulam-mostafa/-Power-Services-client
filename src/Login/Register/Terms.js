import React from 'react';
import { Button } from 'react-daisyui';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='w-10/12 m-auto my-10'>
            <p className='my-20'>
                1. CONTACT USIn order to resolve a complaint regarding the Site or to receive further information regarding use of the Site,
                <br />
                please contact us at:Md Mostafa Village: Janaliyapara / Bahadurpur;

                Post Office: <br />
                Vawal Mirzapur Gazipur, <br />
                GA 1703 United States <br /> Phone:
                01812456204 <br /> gmneamul@gmail.
                com <br /> These terms of use were
                created using Termly's  <br />
                Terms and Conditions Generator.

            </p>
            <Link to='/register'><Button className='btn btn bg-red-400 text-green-500'>Sign Up</Button></Link>
        </div>
    );
};

export default Terms;