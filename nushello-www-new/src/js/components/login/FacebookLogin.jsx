'use strict';
import React  from 'react';
import cookie from 'react-cookie';
import AuthAction from 'actions/auth-action';

export default class FacebookLogin extends React.Component {


  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
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
  }

  handleClick() {
    FB.login(function(response) {
      if (response.status === 'connected') {
        let accessToken = response.authResponse.accessToken;
        let userID = response.authResponse.userID;

        // cookie.save('facebookUid', userID);

        AuthAction.login({
          'userID': userID,
          'accessToken': accessToken
        });

      } else {
        // error message here
      }
    });
  }

  render() {
    // var isLogin = this.props.auth;
    var isLogin = false;
    var button = <button onClick={ this.handleClick } className="btn btn-info">Facebook Login</button>;
    return (
      <div>{ isLogin ? null : button }</div>
    );

  }
}
