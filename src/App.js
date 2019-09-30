import React, { useState } from 'react';
import Session from './Session';
import Break from './Break';
import Timer from './Timer';
import './App.css';

const App = () => {
    
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  const incrementSession = () => {
    setSessionLength(sessionLength + 1)
  }
  const decrementSession = () => {
    if (sessionLength > 0) {
      setSessionLength(sessionLength - 1)
    }
  }
  const incrementBreak = () => {
    setBreakLength(breakLength + 1)
  }
  const decrementBreak = () => {
    if (breakLength > 0) {
      setBreakLength(breakLength - 1)
    }
  }

  return (
    <div className="app-container">
      <h1>Pomodoro Clock</h1>
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
      <Timer
          breakLength={breakLength}
          setBreakLength={setBreakLength}
          sessionLength={sessionLength}
          setSessionLength={setSessionLength}
      />
    </div>
  );
}

export default App;
