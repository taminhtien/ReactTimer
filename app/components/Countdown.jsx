import React from 'react'
import Clock from 'Clock'

class Countdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsElapsed: 100
    }
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed - 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <Clock totalSeconds={this.state.secondsElapsed}/>
      </div>
    )
  }
}

export default Countdown
