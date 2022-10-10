import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const loaderData = useLoaderData()
    console.log(loaderData.data);
    return (
        <div className='home-container'>
            <Banner></Banner>
            <div className='container py-5'>
                <div className='text-center mb-3'>
                    <h2>Available Quiz Topics</h2>
                </div>
                <div className='quiz-container'>
                    {
                        loaderData.data.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;