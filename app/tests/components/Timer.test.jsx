import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import $ from 'jQuery'

import Timer from 'Timer'

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist()
  })

  describe('handleStatusChange', () => {
    it('should start timer on started status', (done) => {
      const timer = TestUtils.renderIntoDocument(<Timer/>)
      timer.handleStatusChange('started')

      expect(timer.state.count).toBe(0)

      setTimeout(() => {
        expect(timer.state.count).toBe(1)
      expect(timer.state.status).toBe('started')
        done()
      }, 1001)
    }) 

    it('should never set count greater than 600', (done) => {
      const timer = TestUtils.renderIntoDocument(<Timer/>)
      timer.state.count = 599
      timer.state.status = 'paused'
      timer.handleStatusChange('started')

      setTimeout(() => {
        expect(timer.state.count).toBe(0)
        expect(timer.state.status).toBe('stopped')
        done()
      }, 3001)
    }) 

    it('should pause timer on paused status', (done) => {
      const timer = TestUtils.renderIntoDocument(<Timer/>)
      timer.state.count = 10
      timer.state.status = 'started'
      timer.handleStatusChange('paused')

      setTimeout(() => {
        expect(timer.state.count).toBe(10)
        expect(timer.state.status).toBe('paused')
        done()
      }, 1001)
    })

    it('should clear count on stopped status', (done) => {
      const timer = TestUtils.renderIntoDocument(<Timer/>)
      timer.state.count = 10
      timer.state.status = 'started'
      timer.handleStatusChange('stopped')

      setTimeout(() => {
        expect(timer.state.count).toBe(0)
        expect(timer.state.status).toBe('stopped')
        done()
      }, 1001)
    })
  })
})
