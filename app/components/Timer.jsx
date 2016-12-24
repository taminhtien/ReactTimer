import React from 'react'
import Clock from 'Clock'
import Controls from 'Controls'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      status: 'stopped'
    }
  }

  setTimer() {
    this.timer = setInterval(() => {
      const newCount = this.state.count + 1

      this.setState({
        count: newCount >= 0 ? newCount : 0
      })

      if(newCount === 600) {
        this.setState({status: 'stopped'})
      }
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

  componentWillUnmount() {
    clearInterval(this.timer)
    this.timer = undefined
  }

  handleStatusChange(newStatus) {
    this.setState({status: newStatus})
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <h1 className='page-title'>Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls status={this.state.status} onStatusChange={(newStatus) => this.handleStatusChange(newStatus)}/>
      </div>
    )
  }
}

export default Timer
