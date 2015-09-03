'use strict';
import React  from 'react';

export default class FacebookLike extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    React.createElement('div', { id: 'fb-root' });
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.4&appId=1467581460234203';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  render() {
    return (
      <div>
        <div className="fb-like" data-href="https://www.facebook.com/nushelloapp" data-layout="button_count" data-action="like" data-show-faces="true" data-share="false"></div>
      </div>
    );
  }

}
