import React, { useState, useEffect, useRef } from 'react';
import Session from './Session';
import Break from './Break';
import './Timer.css';
import soundfile from './ride.wav'

const Timer = () => {
    const [sessionLength, setSessionLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);
    const [timerLabel, setTimerLabel] = useState('Session');
    const [secondsLeft, setSecondsLeft] = useState(25 * 60);
    const [timerRunning, setTimerRunning] = useState(false);
    const myAudio = useRef();
    
    const incrementSession = () => {
      if (!timerRunning && sessionLength < 60){
        setSessionLength(sessionLength + 1)
        setSecondsLeft((sessionLength + 1) * 60);
      }
    }
    const decrementSession = () => {
      if (!timerRunning && sessionLength > 1) {
        setSessionLength(sessionLength - 1)
        setSecondsLeft((sessionLength - 1) * 60);
      }
    }
    const incrementBreak = () => {
      if (!timerRunning && breakLength < 60){
        setBreakLength(breakLength + 1)
      }
    }
    const decrementBreak = () => {
      if (!timerRunning && breakLength > 1) {
        setBreakLength(breakLength - 1)
      }
    }
  
    let minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft - minutes * 60;

    useEffect(() => {
        const handleSwitch = () => {
            console.log('switch');
            if (timerLabel === 'Session') {
                setTimerLabel('Break');
                setSecondsLeft(breakLength * 60);
            } else if (timerLabel === 'Break') {
                setTimerLabel('Session');
                setSecondsLeft(sessionLength * 60);
            }
        }
        
        let countdown = null;
        if (timerRunning && secondsLeft > 0) {
            countdown = setInterval(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
        } else if (timerRunning && secondsLeft === 0) {
            countdown = setInterval(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            myAudio.current.play();
            handleSwitch();
        } else {
            clearInterval(countdown);
        }
        return () => clearInterval(countdown);
    },
    [timerRunning, secondsLeft, timerLabel, breakLength, sessionLength, myAudio]);
    
    const handleStart = () => {
        setTimerRunning(true);
    }
    
    const handleStop = () => {
        setTimerRunning(false);
    }
    
    const handleReset = () => {
        setSessionLength(25);
        setBreakLength(5);
        setSecondsLeft(25 * 60);
        setTimerLabel('Session');
        setTimerRunning(false);
        myAudio.current.pause();
        myAudio.current.currentTime = 0;
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
                <h2 id='timer-label'>{timerLabel}</h2>
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
            <audio
                    id='beep'
                    ref={myAudio}
                    src={soundfile}
                    type='audio'
                ></audio>
        </div>
    )
}

export default Timer;