'use strict';

import React from 'react';
import Reflux from 'reflux';
import cookie from 'react-cookie';
import Router from 'react-router';

var LogoutPage = React.createClass({
  mixins: [Router.Navigation],

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
    cookie.remove('current_user');
		cookie.remove('firebaseToken');
		this.transitionTo('/');
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
    return (<div></div>);
  }
});

module.exports = LogoutPage;
