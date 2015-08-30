'use strict';
import _ from 'lodash';
import React  from 'react';
import Reflux from 'reflux';
import cookie from 'react-cookie';
import AuthAction from 'actions/auth-action';
import AuthStore from 'stores/auth-store';

require('./FacebookLogin.scss');

var FacebookLogin = React.createClass({
  mixins: [Reflux.connect(AuthStore)],

  componentWillMount: function() {
    AuthAction.init();
  },

  componentDidMount: function() {
    if (!this.props.appId) {
      throw 'app ID please!';
    }

    window.fbAsyncInit = function() {
      FB.init({
        appId: this.props.appId,
        xfbml: true,
        version: 'v2.4'
      });
    }.bind(this);

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return; }
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
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
    var isLogin = false;

    if (!_.isEmpty(this.state.currentUser)) {
      isLogin = true;
    }

    var button = <button onClick={ this.handleClick } className="btn btn-default btn-lg facebook-login">Login with Facebook</button>;
    return (
      <div>{ isLogin ? null : button }</div>
    );

  }
});

module.exports = FacebookLogin;
