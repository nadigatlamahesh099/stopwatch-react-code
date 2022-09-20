import {Component} from 'react'

import './index.css'

const initialState = {
  isTimerStarted: false,
  secondsState: 0,
}

class Stopwatch extends Component {
  state = initialState

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  onResetTimer = () => {
    clearInterval(this.intervalId)
    this.setState(initialState)
  }

  onStopTimer = () => {
    clearInterval(this.intervalId)
    this.setState(prevState => ({
      isTimerStarted: !prevState.isTimerStarted,
    }))
  }

  onStartTimer = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        secondsState: prevState.secondsState + 1,
      }))
    }, 1000)
    this.setState(prevState => ({
      isTimerStarted: !prevState.isTimerStarted,
    }))
  }

  render() {
    const {isTimerStarted, secondsState} = this.state

    const secondsCount = secondsState % 60
    const minutesCount = Math.floor(secondsState / 60)
    const stringifiedMinutes =
      minutesCount > 9 ? minutesCount : `0${minutesCount}`
    const stringifiedSeconds =
      secondsCount > 9 ? secondsCount : `0${secondsCount}`

    return (
      <div className="main-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="stopwatch-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              alt="stopwatch"
              className="stopwatch-icon"
            />
            <h1 className="main-head">Timer</h1>
          </div>
          <h1 className="para">
            {stringifiedMinutes}:{stringifiedSeconds}
          </h1>
          <div>
            <button
              type="button"
              className="button1 button"
              disabled={isTimerStarted}
              onClick={this.onStartTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="button2 button"
              disabled={!isTimerStarted}
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button3 button"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
