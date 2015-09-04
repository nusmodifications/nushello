'use strict';

import React from 'react';
import Router from 'react-router';

var Component = React.createClass({
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
  }
});

module.exports = Component;
