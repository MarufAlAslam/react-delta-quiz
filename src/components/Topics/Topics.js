import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
    const loaderData = useLoaderData()
    return (
        <div className='container py-5'>
            <div className='text-center mb-3'>
                <h2>Available Quiz Topics</h2>
            </div>
            <div className='row py-4'>
                {
                    loaderData.data.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Topics;