'use strict';
import _ from 'lodash';
import React  from 'react';
import Reflux from 'reflux';
import cookie from 'react-cookie';

require('./FacebookLogin.scss');

var FacebookLogin = React.createClass({
  componentWillMount: function() {
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

  render: function() {
    var isLogin = false;
    if (!_.isEmpty(this.props.currentUser)) {
      isLogin = true;
    }

    var button = <button onClick={ this.props.onClick } className="btn btn-primary btn-lg facebook-login">Login with Facebook</button>;
    return (
      <div>{ isLogin ? null : button }</div>
    );

  }
});

module.exports = FacebookLogin;
