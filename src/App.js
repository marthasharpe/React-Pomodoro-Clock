import React, { useState } from 'react';
import Session from './Session';
// import Break from './Break';
import Timer from './Timer';
import './App.css';

const App = () => {

  const [sessionLength, setSessionLength] = useState(25);
  // const [breakLength, setBreakLength] = useState(5);
  const [timerLabel, setTimerLable] = useState('Session');
  const [timeLeft, setTimeLeft] = useState(25);
  // const [running, setRunning] = useState(false);

  //if timeleft === 0, audio.play(), then change timerlabel
  //if timerlabel === 'session', set timeleft as sessionlength
  //if timerlabel === 'break', set timeleft as breaklength

  const handleReset = () => {
    console.log('reset')
    setSessionLength(25);
    // setBreakLength(5);
    setTimerLable('Session');
    setTimeLeft(25);
    // setRunning(false);
  }

  const incrementSession = () => {
    setSessionLength(sessionLength + 1)
  }
  const decrementSession = () => {
    setSessionLength(sessionLength - 1)
  }
  
  return (
    <div className="app-container">
      <h1>Pomodoro Clock</h1>
      <Session
        sessionLength={sessionLength}
        incrementSession={incrementSession}
        decrementSession={decrementSession}
      />
      <Timer
        timerLabel={timerLabel}
        timeLeft={timeLeft}
        handleReset={handleReset}
      />
    </div>
  );
}

export default App;
