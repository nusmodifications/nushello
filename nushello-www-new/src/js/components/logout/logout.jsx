'use strict';

import React from 'react';
import cookie from 'react-cookie';

require('./logout.scss');

var Logout = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query) {
    },

    willTransitionFrom: function(transition, component) {
    }
  },

  propTypes: {},
  defaultProps: {},
  contextTypes: {
    router: React.PropTypes.func
  },

  componentWillMount: function() {
  },

  componentDidMount: function() {
  },

  componentWillReceiveProps: function(nextProps) {
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return true;
  },

  componentWillUpdate: function(nextProps, nextState) {
  },

  componentDidUpdate: function(prevProps, prevState) {
  },

  componentWillUnmount: function() {
  },

  render: function() {
    return (
      <div className="logout">
        <a href="/logout">Log out</a>
      </div>
    );
  }
});

module.exports = Logout;
