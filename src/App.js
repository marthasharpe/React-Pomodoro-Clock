import React from 'react';
import Session from './Session';
// import Break from './Break';
import Timer from './Timer';
import Reset from './Reset';
import './App.css';

class App extends React.Component {
  state = {
    sessionLength: 25,
    breakLength: 5,
    timerLabel: 'Session',
    timeLeft: 25,
    running: false,
  }

  handleReset = () => {
    console.log('reset')
    this.setState({
      sessionLength: 25,
      breakLength: 5,
      timerLabel: 'Session',
      timeLeft: 25,
      running: false,
    })
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
        <Reset handleReset={this.handleReset}/>
      </div>
    );
  }
}

export default App;
