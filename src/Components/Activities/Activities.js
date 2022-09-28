import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';
import './Activities.css';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect( () => {
        fetch('karate.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, []);
    return (
        <div className='home'>
            <div className="activity-container">
                <div className="logo">
                    <h1><i class="fa-solid fa-user-ninja"></i> Fighter Karate Do</h1>
                    <h2>Choose Your Task</h2>
                </div>
                <div className="tasks-container">
                    {
                        activities.map(activity => <Task 
                            key={activity.id}
                            activity = {activity}
                        ></Task>)
                    }
                </div>
            </div>
            <div className="list-container">
            </div>
        </div>
    );
};

export default Activities;