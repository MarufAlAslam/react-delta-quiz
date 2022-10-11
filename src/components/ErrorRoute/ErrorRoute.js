import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from './404.svg';
import './ErrorRoute.css';

const ErrorRoute = () => {
    return (
        <div className='py-5'>
            <div className='container'>
                <div className='text-center'>
                    <img src={errorImg} className="img-fluid w-30" alt="" />
                    <h1 className='my-5 purple title'>
                        What 😯!!!!!!
                    </h1>
                    <p>
                        The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                    </p>
                    <p>
                        <Link to='/' className='purple text-decoration-none'>Go to Homepage</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorRoute;