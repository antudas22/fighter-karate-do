import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';
import './Activities.css';
import List from '../List/List';
import Questions from '../Questions/Questions';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    const [list, setList] = useState([]);

    useEffect( () => {
        fetch('karate.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, []);

    const addToListHandler = (activity) => {
        console.log(activity);
        const newList = [...list, activity];
        setList(newList);
    }

    return (
        <div className='home'>
            <div className="activity-container">
                <div className="logo">
                    <h1><FontAwesomeIcon icon={faUserNinja}></FontAwesomeIcon> Fighter Karate Do</h1>
                    <h2>Choose Your Task</h2>
                </div>
                <div className="tasks-container">
                    {
                        activities.map(activity => <Task 
                            key={activity.id}
                            activity = {activity}
                            addToListHandler = {addToListHandler}
                        ></Task>)
                    }
                </div>
            </div>
            <div className="list-container">
                <List
                    list={list}
                ></List>
            </div>
            <Questions></Questions>
        </div>
    );
};

export default Activities;