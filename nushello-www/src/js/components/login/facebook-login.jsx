'use strict';
import _ from 'lodash';
import React  from 'react';
import Reflux from 'reflux';
import cookie from 'react-cookie';

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

    var loginButton = (<button onClick={ this.props.onClick } className="btn btn-fill btn-primary btn-lg facebook-login">
        <i className="fa fa-facebook"></i>&nbsp;&nbsp;&nbsp;Facebook login
      </button>);

    var loadingButton = (<button className="btn btn-fill btn-default btn-lg facebook-loading">
        <i className="fa fa-facebook"></i>&nbsp;&nbsp;&nbsp;Loading...
      </button>);

    return (
      <div>{ isLogin ? loadingButton : loginButton }</div>
    );

  }
});

module.exports = FacebookLogin;
