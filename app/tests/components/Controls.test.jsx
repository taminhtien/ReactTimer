import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import $ from 'jQuery'

import Controls from 'Controls'

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  })

  describe('render', () => {
    it('should render pause when started', () => {
      const controls = TestUtils.renderIntoDocument(<Controls status='started'/>)
      const $el = $(ReactDOM.findDOMNode(controls))
      const $pauseButton = $el.find("button:contains('Pause')")

      expect($pauseButton.length).toBe(1)
    })

    it('should render start when paused', () => {
      const controls = TestUtils.renderIntoDocument(<Controls status='paused'/>)
      const $el = $(ReactDOM.findDOMNode(controls))
      const $startButton = $el.find("button:contains('Start')")

      expect($startButton.length).toBe(1)
    })
  })
})
