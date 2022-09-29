import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';
import './Activities.css';

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
                <div className="user-info">
                    <div className="user-img">
                    <img src="https://media.istockphoto.com/photos/shot-of-a-handsome-young-man-standing-against-a-grey-background-picture-id1335941248?b=1&k=20&m=1335941248&s=170667a&w=0&h=sn_An6VRQBtK3BuHnG1w9UmhTzwTqM3xLnKcqLW-mzw=" alt="" />
                    </div>
                    <div className="user-details">
                        <h2>Jack Juck</h2>
                        <p>Berlin, Germany</p>
                    </div>
                </div>
                <p>Selected List: {list.length}</p>
            </div>
        </div>
    );
};

export default Activities;