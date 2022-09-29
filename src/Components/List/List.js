import React, { useEffect, useState } from 'react';
import { addToDb, getStoredList } from '../../utilities/fakedb';
import './List.css';





const List = (props) => {
    const {list} = props;
    
    let totalTime = 0;
    for(const item of list){
        totalTime = totalTime + item.time;
    }

    // useEffect( () => {
    //     const storedList = getStoredList();
    //     for(const id in storedList){
    //         time.push(id);
    //     }
    // }, [])

    const [time, setTime] = useState([]);
    const breakHandler = (props) => {
        const newTime = props;
        setTime(newTime);
        // addToDb(newTime);
        localStorage.setItem('minute', JSON.stringify(newTime));
    }

    return (
        <div className='list'>
            <div className="user-info">
                    <div className="user-img">
                        <img src="https://media.istockphoto.com/photos/shot-of-a-handsome-young-man-standing-against-a-grey-background-picture-id1335941248?b=1&k=20&m=1335941248&s=170667a&w=0&h=sn_An6VRQBtK3BuHnG1w9UmhTzwTqM3xLnKcqLW-mzw=" alt="" />
                    </div>
                    <div className="user-details">
                        <h2>Jack Juck</h2>
                        <p>Berlin, Germany</p>
                    </div>
                </div>
                <div className='user-another-details'>
                    <div><p>Weight: 60kg</p></div>
                    <div><p>Height: 5.7</p></div>
                    <div><p>Age: 20yrs</p></div>
                </div>

                <div>
                    <h3>Time Break</h3>
                    <div className='time-break'>
                        <button onClick={() => breakHandler(1)}>1m</button>
                        <button onClick={() => breakHandler(3)}>3m</button>
                        <button onClick={() => breakHandler(5)}>5m</button>
                        <button onClick={() => breakHandler(10)}>10m</button>
                    </div>
                </div>

                <h3>Exercise Details</h3>
                <p className='time'>Exercise Time: {totalTime} Minutes</p>
                <p className='break'>Break Time: {time} Minutes</p>

                <button className='completed-btn'>Activity Completed</button>
        </div>
    );
};

export default List;