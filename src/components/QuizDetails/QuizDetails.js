import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './QuizDetails.css'

const QuizDetails = () => {
    const loaderData = useLoaderData();
    // console.log(loaderData.data.questions.length);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setInCorrect] = useState(0);
    const [clicked, checkClicked] = useState(false);
    const [diff, setDiff] = useState("Default");
    const quizProps = {
        correct: correct,
        setCorrect: setCorrect,
        incorrect: incorrect,
        setInCorrect: setInCorrect,
        clicked: clicked,
        checkClicked: checkClicked,
        diff: diff,
        setDiff: setDiff
    }
    return (
        <div className='quiz-holder py-5'>
            <div className='container'>
                <div className='text-center'>
                    <p className='mb-0'>Quiz About</p>
                    <h1 className='purple fw-bold'>{loaderData.data.name}</h1>
                </div>

                <div className='quiz-cards row column-reverse'>
                    <div className='col-md-9 p-3'>
                        {
                            loaderData.data.questions.map((question, index) => <Question key={question.id} index={index + 1} quizProps={quizProps} question={question}></Question>)
                        }
                    </div>
                    <div className='col-md-3 p-3'>
                        <div className='card border-0 gradient mt-5 result-holder'>
                            <div className='card-body'>
                                <h4 className='text-white text-center'>
                                    Result
                                </h4>
                                <hr className='text-white' />
                                <p className='text-white mb-2 fs-20'>
                                    Total Questions: <span className='badge bg-light text-dark'>{loaderData.data.questions.length}</span>
                                </p>
                                <p className='text-white mb-2'>
                                    Correctly Answered: <span className='badge bg-success'>{correct}</span> Times
                                </p>
                                <p className='text-white mb-2'>
                                    Wrong Answered: <span className='badge bg-danger'>{incorrect}</span> Times
                                </p>
                                <hr className='text-white' />
                                <p className='text-white mb-2 fs-20'>
                                    Status: <span className='badge bg-primary'>{diff}</span>
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