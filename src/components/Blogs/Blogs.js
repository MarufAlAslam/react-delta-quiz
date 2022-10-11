import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            question: "What is the purpose of react router",
            answer: "React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL"
        },
        {
            id: 2,
            question: "How does context api works",
            answer: "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to 'prop drilling' or moving props from grandparent to child to parent, and so on."
        },
        {
            id: 3,
            question: "useRef() hook in details",
            answer: "The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react. The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. "
        }
    ]
    return (
        <div className='py-5'>
            <div className='container'>
                <div className='text-center'>
                    <p className='mb-1'>
                        Here You'll Find All My
                    </p>
                    <h2 className='purple'>Blogs</h2>
                </div>

                <div className='mt-4'>
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;