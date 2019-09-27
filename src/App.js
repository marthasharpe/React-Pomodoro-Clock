import React from 'react';
import Session from './Session';
// import Break from './Break';
import Timer from './Timer';
import './App.css';

class App extends React.Component {
  state = {
    sessionLength: 25,
    breakLength: 5,
    timerLabel: 'Work',
    timeLeft: 25,
    running: false,
  }

  render() {
    console.log(this.state)
    return (
      <div className="app-container">
        <h1>Pomodoro Clock</h1>
        <Session sessionLength={this.state.sessionLength}/>
        <Timer
          timerLabel={this.state.timerLabel}
          timeLeft={this.state.timeLeft}
        />
      </div>
    );
  }
}

export default App;
