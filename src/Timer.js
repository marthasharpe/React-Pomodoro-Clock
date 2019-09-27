import React from 'react';
import './Timer.css';

const Timer = ({ timerLabel, timeLeft }) => {
    return (
        <div className='timer-container'>
            <h2 id='timer-label'>{timerLabel} Time</h2>
            <h3 id='time-left'>{timeLeft}:00</h3>
            <button id='start-stop'>Start/Stop</button>
        </div>
    )
}

export default Timer;