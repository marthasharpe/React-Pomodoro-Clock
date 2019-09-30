import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = props => {
    const [timeLeft, setTimeLeft] = useState(props.sessionLength);
    const [timerLabel, setTimerLabel] = useState('Session');
    const [timerRunning, setTimerRunning] = useState(false);

// if timeLeft === 0, call a function that changes timerLabel to the opposite and changes timeLeft to the label's length
    
const handleSwitch = () => {
        if (timerLabel === 'Session') {
            setTimerLabel('Break');
            setTimeLeft(props.breakLength);
        } else if (timerLabel === 'Break') {
            setTimerLabel('Session');
            setTimeLeft(props.sessionLength);
        }
    }

    useEffect(() => {
        let countdown = null;
        if (timerRunning && timeLeft > 0) {
            countdown = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            handleSwitch();
            clearInterval(countdown);
        } else {
            clearInterval(countdown);
        }
        return () => clearInterval(countdown);
    }, [timerRunning, timeLeft, handleSwitch]);
    
    const handleStart = () => {
        console.log('start')
        setTimerRunning(true);
    }
    
    const handleStop = () => {
        console.log('stop')
        setTimerRunning(false);
    }
    
    const handleReset = () => {
        console.log('reset');
        props.setSessionLength(25);
        props.setBreakLength(5);
        setTimeLeft(props.sessionLength);
        setTimerLabel('Session');
        setTimerRunning(false);
    }

    return (
        <div className='timer-component'>
            
            <div className='timer-container'>
                <h2 id='timer-label'>{timerLabel} Time</h2>
                <h3 id='time-left'>
                    {timeLeft}
                    {/* {minutes < 10 ? ("0" + minutes).slice(-2) : minutes}:{seconds < 10 ? ("0" + seconds).slice(-2) : seconds} */}
                </h3>
                
                <button
                    id='start-stop'
                    onClick={timerRunning ? handleStop : handleStart}
                    >
                Start/Stop
                </button>
            </div>
            
            <button
                onClick={handleReset}
                id='reset'
                >
            Reset
            </button>
        
        </div>
    )
}

export default Timer;