import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Question.css';

const Question = ({ question }) => {
    function createMarkup() {
        return { __html: `${question.question}` };
    }
    return (
        <div className='quiz-box gradient rounded text-white p-5 my-5'>
            <div className='d-flex justify-content-between align-items-center'>
                <p className='fs-20' dangerouslySetInnerHTML={createMarkup()}></p>
                <button className='btn btn-success'>
                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </button>
            </div>
            {
                question.options.map(option => <button className='btn d-block option btn-info p-2 rounded my-3'>
                    {option}
                </button>)
            }
        </div>
    );
};

export default Question;