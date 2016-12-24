import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'
import Main from 'Main'
import Timer from 'Timer'
import Countdown from 'Countdown'

// Load foundation
// require doesn't know how to load css file, so we need to use css loader
// then use style loader to inject the css into html
// require("style!css!foundation-sites/dist/foundation.min.css")

$(document).foundation()

require("style!css!sass!applicationStyles")

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer} />
      <Route path="countdown" component={Countdown} />
    </Route>
  </Router>,
  document.getElementById('app')
)
