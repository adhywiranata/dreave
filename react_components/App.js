import React, {Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

/*
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Redirect = require('react-router').Redirect;
*/

import LifeNotes from './LifeNotes';

var NoMatch = React.createClass({
  render: function() {
    return (
      <h2>No match for the route</h2>
    );
  }
});

var mountNode = document.getElementById('section-life-notes');

/*
ReactDOM.render(
  (
    <Router>
      <Route path="trainings" component={LifeNotes} />
      <Redirect from="/" to="/trainings" />
      <Route path="*" component={NoMatch} />
    </Router>
  ),
  mountNode
);
*/

console.log('test bufferx');
ReactDOM.render(
  <LifeNotes />,
  mountNode
)
