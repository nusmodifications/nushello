'use strict';

import _ from 'lodash';
import React from 'react';
import Reflux from 'reflux';
import Router from 'react-router';

import Footer from 'components/layout/footer/footer.jsx';
import AuthAction from 'actions/auth-action';
import AuthStore from 'stores/auth-store';
import FacebookLogin from 'components/login/facebook-login.jsx';

require('./login-page.scss');

var LoginPage = React.createClass({
  mixins: [Reflux.connect(AuthStore), Router.Navigation],

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
    AuthAction.init();
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
    if (!_.isEmpty(this.state.currentUser)) {
      if (this.state.currentUser.type === 'newUser') {
        this.transitionTo('register');
      } else if (this.state.currentUser.type === 'existingUser') {
        this.transitionTo('chat');
      }
    }
  },

  componentWillUnmount: function() {
  },

  handleClick: function() {
    FB.login(function(response) {
      if (response.status === 'connected') {
        let facebookToken = response.authResponse.accessToken;
        let userID = response.authResponse.userID;

        AuthAction.login({
          'userID': userID,
          'facebookToken': facebookToken
        });

      } else {
        // error message here
      }
    });
  },

  render: function() {
    var currentUser = {};
    if (!_.isEmpty(this.state.currentUser)) {
      currentUser = this.state.currentUser;
    }
    return (
      <div className="login-container">
        <div className="login-wrapper">
          <div className="logo-banner">
            <img className="main-icon" src={require('images/nushello-icon-white.png')}/>
            <h1 className="app-title">NUSHello</h1>
          </div>
          <div className="hero-banner container-fluid" style={{backgroundImage: 'url(' + require('images/background.jpg') + ')'}}>
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <h2>Say "Hello!" to a new NUS experience</h2>
              </div>
            </div>
            <br/>
            <FacebookLogin appId="1467581460234203" onClick={ this.handleClick } currentUser={ currentUser }/>
            <br/>
            <p>Get matched. Chat anonymously. Mutually reveal identities.</p>
            <p>The best part? No strings attached.</p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = LoginPage;
