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
        <div className='question-ans'>
            <h3>Difference between props and state.</h3>
            <p>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
        </div>
        <div className='question-ans'>
            <h3>What is useeffect used for other than data load?</h3>
            <p>Ans: Running once on mount: fetch API data
            Running on state change: validating input field
            Running on state change: live filtering
            Running on state change: trigger animation on new array value
            Running on props change: update paragraph list on fetched API data update
            Running on props change: updating fetched API data to get BTC updated price</p>
        </div>
         </div>
        </div>
    );
};

export default Questions;