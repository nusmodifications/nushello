'use strict';
import _ from 'lodash';
import React  from 'react';
import Reflux from 'reflux';
import cookie from 'react-cookie';

var FacebookShare = React.createClass({
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
    FB.ui({
      method: 'share',
      href: 'http://nushello.com/'
    }, function(response){});
  },

  render: function() {
    return (
      <div className="col-xs-3">
        <button onClick={this.handleClick} className="btn btn-fill btn-info">Share</button>
      </div>
    );
  }
});

module.exports = FacebookShare;
