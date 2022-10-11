import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

const Quiz = ({ quiz }) => {
    return (
        <div className='col-lg-3 col-md-6 p-3'>
            <div className='card border-0 shadow gradient'>
                <div className='card-body'>
                    <img src={quiz.logo} className="img-fluid card-img-top" alt="" />
                </div>
                <hr className='text-white' />
                <div className='card-footer text-white pb-3'>
                    <h3>{quiz.name}</h3>
                    <p>No. of Questions: {quiz.total}</p>
                    <button className='btn btn-light w-100 p-0'>
                        <Link className='text-dark text-decoration-none d-block h-100 w-100 p-2' to={`quiz/${quiz.id}`}>Start Quiz</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;