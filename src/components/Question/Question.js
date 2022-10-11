import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Question.css';

const Question = ({ question, quizProps, index }) => {
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
                <div className='d-flex align-items-start'>
                    <span className='fs-20 badge bg-danger text-dark'>{index}</span>
                    <p className='fs-20 ms-2' dangerouslySetInnerHTML={createMarkup()}></p>
                </div>
                <button className='btn btn-primary' onClick={notify}>
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