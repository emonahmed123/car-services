import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesDetails = () => {
     const {serviceId} =useParams()
    return (
        <div>
            <h1>Welcome to detail{serviceId}</h1>
              <div className='text-center'>
              <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Cheakout</button>
                   </Link>
              </div>
        </div>
    );
};

export default ServicesDetails;