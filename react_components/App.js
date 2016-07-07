var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Redirect = require('react-router').Redirect;

var LifeNotes = require('./LifeNotes');

var NoMatch = React.createClass({
  render: function() {
    return (
      <h2>No match for the route</h2>
    );
  }
});

var mountNode = document.getElementById('section-life-notes');

ReactDOM.render(
  (
    <Router>
      <Route path="/trainings" component={LifeNotes} />
      <Redirect from="/" to="/trainings" />
      <Route path="*" component={NoMatch} />
    </Router>
  ),
  mountNode
);
