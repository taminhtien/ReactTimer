import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import $ from 'jQuery'

import CountdownForm from 'CountdownForm'

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist()
  })

  it('should call onSetCountdown if valid seconds entered', () => {
    const spy = expect.createSpy()
    const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>) // Inject CountdownForm to React DOM
    const $el = $(ReactDOM.findDOMNode(countdownForm)) // Find countdownForm in React DOM and return its HTML, then create jQuery object

    countdownForm.refs.seconds.value = '109' // Assign value to seconds input
    TestUtils.Simulate.submit($el.find('form')[0]) // Simulate form submit

    expect(spy).toHaveBeenCalledWith(109) // 109 is valid value so spy will be call
  })

  it('should not call onSetCountdown if invalid seconds entered', () => {
    const spy = expect.createSpy()
    const countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
    const $el = $(ReactDOM.findDOMNode(countdownForm))

    countdownForm.refs.seconds.value = 'abc'
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()
  })
})
