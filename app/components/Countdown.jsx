import React from 'react'
import Clock from 'Clock'
import CountdownForm from 'CountdownForm'
import Controls from 'Controls'

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
    const { status } = this.state

    if(status !== prevStates.status) {
      switch(status) {
        case 'started':
          this.setTimer()
          break
        case 'stopped':
          this.setState({count: 0})
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined
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

  handleStatusChange(newStatus) {
    this.setState({status: newStatus})
  }

  renderControl() {
    const { status } = this.state

    if(status === 'stopped') {
      return <CountdownForm onSetCountdown={(seconds) => this.handleSetCountdown(seconds)}/>
    } else {
      return <Controls status={this.state.status} onStatusChange={(newStatus) => this.handleStatusChange(newStatus)}/>
    }
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <Clock totalSeconds={count}/>
        {this.renderControl()}
      </div>
    )
  }
}

export default Countdown
