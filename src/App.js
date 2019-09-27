import React from 'react';
import Session from './Session';
import './App.css';

class App extends React.Component {
  state = {
    sessionLength: 25,
    breakLength: 5,
    currentPeriod: 'Work',
    currentTime: 25,
    running: false,
  }

  render() {
    console.log(this.state)
    return (
      <div className="app-container">
        <h1>Pomodoro Clock</h1>
        <Session sessionLength={this.state.sessionLength}/>
      </div>
    );
  }
}

export default App;
