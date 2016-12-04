var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');

// Load foundation
// require doesn't know how to load css file, so we need to use css loader
// then use style loader to inject the css into html

require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

require("style!css!sass!applicationStyles");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
