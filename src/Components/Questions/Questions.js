import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='blog'>
            <h2>Blog</h2>
         <div className="allquestions">
         <div className='question-ans'>
            <h3>How does react work?</h3>
            <p>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
        </div>
         </div>
        </div>
    );
};

export default Questions;