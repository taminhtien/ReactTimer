import React from 'react'

class Controls extends React.Component {
  static propTypes() {
    status: React.PropTypes.string.isRequired
  }

  onPause() {
    this.props.handlePause()
  }

  onStart() {
    this.props.handleStart()
  }

  onClear() {
    this.props.handleClear()
  }

  render() {
    const { status } = this.props
    return (
      <div>
        { status === 'started' && <button className='button secondary' onClick={() => this.onPause()}>Pause</button> }
        { status === 'paused' && <button className='button primary' onClick={() => this.onStart()}>Start</button> }
        <button className='button alert hollow' onClick={() => this.onClear()}>Clear</button>
      </div>
    )
  }
}

export default Controls
