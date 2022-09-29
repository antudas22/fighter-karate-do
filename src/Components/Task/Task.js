import React from 'react';
import './Task.css';

const Task = (props) => {
    const {img, name, age, time} = props.activity;
    return (
        <div className='task-card'>
            <img src={img} alt="" />
            <div className="task-details">
                <h2 className='task-name'>{name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos autem nemo odio.</p>
                <h4>Age: {age}</h4>
                <h4>Time required: {time}m</h4>
            </div>
            <button className='card-btn'>Add to list</button>
        </div>
    );
};

export default Task;