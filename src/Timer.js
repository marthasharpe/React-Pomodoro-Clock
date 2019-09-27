import React from 'react';
import './Timer.css';

const Timer = props => {  

    let time = props.timeLeft * 60;
    let minutes = Math.floor(time / 60);
    let seconds = (time % 60);

    return (
        <div className='timer-component'>
            <div className='timer-container'>
                <h2 id='timer-label'>{props.timerLabel} Time</h2>
                <h3 id='time-left'>
                    {minutes < 10 ? ("0" + minutes).slice(-2) : minutes}:{seconds < 10 ? ("0" + seconds).slice(-2) : seconds}
                </h3>
                <button id='start-stop'>Start/Stop</button>
            </div>
            <button onClick={props.handleReset} id='reset'>Reset</button>
        </div>
    )
}

export default Timer;