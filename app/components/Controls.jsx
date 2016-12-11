import React from 'react'

class Controls extends React.Component {
  static propTypes() {
    status: React.PropTypes.string.isRequired
    onStatusChange: React.PropTypes.func.isRequired
  }
  
  onStatusChange(newStatus) {
    this.props.onStatusChange(newStatus)
  }

  render() {
    const { status } = this.props
    return (
      <div className='controls'>
        { status === 'started' && <button className='button secondary' onClick={() => this.onStatusChange('paused')}>Pause</button> }
        { status === 'paused' && <button className='button primary' onClick={() => this.onStatusChange('started')}>Start</button> }
        <button className='button alert hollow' onClick={() => this.onStatusChange('stopped')}>Clear</button>
      </div>
    )
  }
}

export default Controls
