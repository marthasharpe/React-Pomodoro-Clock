import React, { useState, useEffect } from 'react';
import Session from './Session';
import Break from './Break';
import './Timer.css';

const Timer = () => {
    const [sessionLength, setSessionLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [timerLabel, setTimerLabel] = useState('Session');
    const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
    const [timerRunning, setTimerRunning] = useState(false);  
  
    const incrementSession = () => {
      if (sessionLength < 60){
        setSessionLength(sessionLength + 1)
      }
    }
    const decrementSession = () => {
      if (sessionLength > 1) {
        setSessionLength(sessionLength - 1)
      }
    }
    const incrementBreak = () => {
      if (breakLength < 60){
        setBreakLength(breakLength + 1)
      }
    }
    const decrementBreak = () => {
      if (breakLength > 1) {
        setBreakLength(breakLength - 1)
      }
    }
  
// How to update timeLeft based on props.sessionLength?
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft - minutes * 60;

    useEffect(() => {
        const handleSwitch = () => {
            console.log('switch');
            if (timerLabel === 'Session') {
                setTimerLabel('Break');
                setTimeLeft(breakLength);
            } else if (timerLabel === 'Break') {
                setTimerLabel('Session');
                setTimeLeft(sessionLength);
            }
        }

        let countdown = null;
        if (timerRunning && timeLeft > 0) {
            countdown = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            //audio.play();
            handleSwitch();
            clearInterval(countdown);
        } else {
            clearInterval(countdown);
        }
        return () => clearInterval(countdown);
    },
    [timerRunning, timeLeft, timerLabel, breakLength, sessionLength]);
    
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
        setSessionLength(25);
        setBreakLength(5);
        setTimeLeft(sessionLength * 60);
        setTimerLabel('Session');
        setTimerRunning(false);
    }

    return (
        <div className='timer-component'>
            <div className="label-container">
                <Session
                sessionLength={sessionLength}
                incrementSession={incrementSession}
                decrementSession={decrementSession}
                />
                <Break
                breakLength={breakLength}
                incrementBreak={incrementBreak}
                decrementBreak={decrementBreak}
                />
            </div>
            <div className='timer-container'>
                <h2 id='timer-label'>{timerLabel} Time</h2>
                <h3 id='time-left'>
                    {minutes < 10 ? ("0" + minutes).slice(-2) : minutes}:{seconds < 10 ? ("0" + seconds).slice(-2) : seconds}
                </h3>
                
                <button
                    id='start_stop'
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
        
            {/* <audio
                id='beep'
                src=''
                ref={}
                /> */}
        </div>
    )
}

export default Timer;