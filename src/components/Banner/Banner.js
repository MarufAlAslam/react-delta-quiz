import React from 'react';
import banner from './banner-img.svg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner py-5'>
            <div className='container'>
                <div className='row column-reverse'>
                    <div className='col-lg-6 p-3 m-auto'>
                        <h4>
                            <span className='purple'>judge yourself with</span>
                        </h4>
                        <h1 className='fw-9 title'>
                            Delta Quiz
                        </h1>
                        <h5>The Personalized quiz for programmers</h5>

                        <ul className='list-unstyled mt-4'>
                            <li className='py-2'>
                                <span className='purple'>#</span> No. 1 Quiz Platform
                            </li>
                            <li className='py-2'>
                                <span className='purple'>#</span> Specialized Questions
                            </li>
                            <li className='py-2'>
                                <span className='purple'>#</span> Instant Answers
                            </li>

                        </ul>
                    </div>
                    <div className='col-lg-6 p-3'>
                        <img src={banner} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;