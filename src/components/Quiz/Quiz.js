import React from 'react';
import './Quiz.css';

const Quiz = ({ quiz }) => {
    return (
        <div className='col-md-3 col-6'>
            <div className='card border-0 shadow gradient'>
                <div className='card-body'>
                    <img src={quiz.logo} className="img-fluid card-img-top" alt="" />
                </div>
                <hr className='text-white' />
                <div className='card-footer text-white pb-3'>
                    <h3>{quiz.name}</h3>
                    <p>No. of Questions: {quiz.total}</p>
                    <button className='btn btn-light w-100'>
                        Start Quiz
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;