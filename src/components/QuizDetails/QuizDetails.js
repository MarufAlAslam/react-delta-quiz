import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const loaderData = useLoaderData();
    // console.log(loaderData.data.questions.length);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setInCorrect] = useState(0);
    return (
        <div className='quiz-holder py-5'>
            <div className='container'>
                <div className='text-center'>
                    <p className='mb-0'>Quiz About</p>
                    <h1 className='purple fw-bold'>{loaderData.data.name}</h1>
                </div>

                <div className='quiz-cards row'>
                    <div className='col-md-9 p-3'>
                        {
                            loaderData.data.questions.map(question => <Question key={question.id} question={question} correct={setCorrect} incorrect={setInCorrect}></Question>)
                        }
                    </div>
                    <div className='col-md-3 p-3'>
                        <div className='card border-0 gradient mt-5'>
                            <div className='card-body'>
                                <h4 className='text-white text-center'>
                                    Result
                                </h4>
                                <hr className='text-white' />
                                <p className='text-white mb-2 fs-20'>
                                    Totat Questions: <span className='badge bg-light text-dark'>{loaderData.data.questions.length}</span>
                                </p>
                                <p className='text-white mb-2 fs-20'>
                                    Correctly Answered: <span className='badge bg-success'>0</span>
                                </p>
                                <p className='text-white mb-2 fs-20'>
                                    Wrong Answered: <span className='badge bg-danger'>0</span>
                                </p>
                                <p className='text-white mb-2 fs-20'>
                                    Ratio: <span className='badge bg-warning text-dark'>0.0</span>
                                </p>
                                <p className='text-white mb-2 fs-20'>
                                    Status: <span className='badge bg-info'>Good</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizDetails;