import React  from 'react';
import cookie from 'react-cookie';

export default class FacebookLogin extends React.Component {


  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (!this.props.appId) {
      throw "app ID please!";
    }

    window.fbAsyncInit = function() {
      FB.init({
        appId      : this.props.appId,
        xfbml      : true,
        version    : 'v2.4'
      });
    }.bind(this);

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  handleClick() {
    const { FacebookLoginActions } = this.props;
    FB.login(function(response) {
      if (response.status === "connected") {
        let accessToken = response.authResponse.accessToken;
        let userID = response.authResponse.userID;

        // Had to be done this way because cookies messes things up for now
        // TODO: Switch all to cookies
        localStorage.setItem('facebookUid', userID);

        const data = {
          'userID': userID,
          'accessToken': accessToken
        };
        FacebookLoginActions.facebookLogin({ data });

      } else {
        // error message here
      }
    });
  }

  render() {
    return (
        <button className='facebook-login' onClick={this.handleClick} {...this.props}>
          Facebook Login
        </button>
    );

  }


}
