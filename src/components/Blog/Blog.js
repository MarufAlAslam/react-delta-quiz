import React from 'react';
import './Blog.css';

const Blog = ({ blog }) => {
    return (
        <div className='blog-holder gradient text-white p-5 rounded my-4'>
            <h2 className='question'>
                {blog.question}
            </h2>
            <p className='answer mb-0'>
                {blog.answer}
            </p>
        </div>
    );
};

export default Blog;