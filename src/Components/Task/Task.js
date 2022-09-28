import React from 'react';
import './Task.css';

const Task = (props) => {
    const {img, name, age, time} = props.activity;
    return (
        <div className='task-card'>
            <img src={img} alt="" />
            <h2 className='task-name'>{name}</h2>
            <h4>Age: {age}</h4>
            <h4>Time required: {time}m</h4>
        </div>
    );
};

export default Task;