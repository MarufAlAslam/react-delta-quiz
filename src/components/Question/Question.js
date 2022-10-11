import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Question.css';

const Question = ({ question, quizProps }) => {
    let { correct, setCorrect, incorrect, setInCorrect, setDiff } = quizProps;


    function createMarkup() {
        return { __html: `${question.question}` };
    }
    const toastData = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    }
    const notify = () => toast.success(
        <div>
            <p className='text-dark mb-1'>Correct Answer is: </p>
            {question.correctAnswer}
        </div>, toastData
    );;

    const right = () => toast.success(<div>
        <p className='text-dark mb-1'>Correct!!! 😎 😎 😎</p>
    </div>, toastData);;

    const wrong = () => toast.error(<div>
        <p className='text-dark mb-1'>Wrong!!! 😒 😒 😒</p>
    </div>, toastData);;



    const checkAnswer = (option) => {

        if (option === question.correctAnswer) {
            right();
            setCorrect(++correct)
        }
        else {
            wrong();
            setInCorrect(++incorrect)
        }

        if (correct > incorrect) {
            setDiff("Good")
        }
        else {
            setDiff("Bad")
        }

    }


    let keyy = 0;
    return (
        <div className='quiz-box gradient rounded text-white p-5 my-5'>
            <div className='d-flex justify-content-between align-items-start'>
                <p className='fs-20' dangerouslySetInnerHTML={createMarkup()}></p>
                <button className='btn btn-success' onClick={notify}>
                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </button>
            </div>
            <ToastContainer></ToastContainer>
            {
                question.options.map(option => <button key={keyy++} className='btn btn-options d-block option btn-info p-2 rounded my-3' onClick={() => { checkAnswer(option) }} option={option}>
                    {option}
                </button>)
            }
        </div>
    );
};

export default Question;