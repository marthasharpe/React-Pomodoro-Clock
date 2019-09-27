import React from 'react';
import './Timer.css';

const Timer = props => {    
    return (
        <div className='timer-container'>
            <h2 id='timer-label'>{props.timerLabel} Time</h2>
            {/* <h3 id='time-left'>{minutes}:{seconds}</h3> */}
            <button id='start-stop'>Start/Stop</button>
        </div>
    )
}

export default Timer;