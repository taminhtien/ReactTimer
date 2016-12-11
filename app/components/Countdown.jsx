import React from 'react'
import Clock from 'Clock'
import CountdownForm from 'CountdownForm'

class Countdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      status: 'stopped'
    }
  }

  setTimer() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1

      this.setState({
        count: newCount >= 0 ? newCount : 0
      })
    }, 1000)
  }

  componentDidUpdate(prevProps, prevStates) {
    const status = this.state.status

    if(status !== prevStates.status) {
      switch(status) {
        case 'started':
          this.setTimer()
          break
      }
    }
  }

  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      status: 'started'
    })
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={(seconds) => this.handleSetCountdown(seconds)}/>
      </div>
    )
  }
}

export default Countdown
