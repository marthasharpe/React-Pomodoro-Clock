import React, { useState } from 'react';
import Session from './Session';
// import Break from './Break';
import Timer from './Timer';
import Reset from './Reset';
import './App.css';

const App = () => {
  const [state, setState] = useState({
    sessionLength: 25,
    breakLength: 5,
    timerLabel: 'Session',
    timeLeft: 25,
    running: false,
  })

  const handleReset = () => {
    console.log('reset')
    setState({
      sessionLength: 25,
      breakLength: 5,
      timerLabel: 'Session',
      timeLeft: 25,
      running: false,
    })
  }

  const incrementSession = () => {
    setState({
      ...state,
      sessionLength: state.sessionLength + 1
    })
  }
  const decrementSession = () => {
    this.setState({
      ...state,
      sessionLength: state.sessionLength - 1
    })
  }
  
  return (
    <div className="app-container">
      <h1>Pomodoro Clock</h1>
      <Session
        sessionLength={state.sessionLength}
        incrementSession={incrementSession}
        decrementSession={decrementSession}
      />
      <Timer
        timerLabel={state.timerLabel}
        timeLeft={state.timeLeft}
      />
      <Reset handleReset={handleReset}/>
    </div>
  );
}

export default App;
