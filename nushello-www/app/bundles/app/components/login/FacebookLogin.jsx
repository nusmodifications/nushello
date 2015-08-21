import React  from 'react';


export default class FacebookLogin extends React.Component {


  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1467581460234203',
        xfbml      : true,
        version    : 'v2.4'
      });
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  handleClick() {
    FB.login(this.handleLogin);
  }

  handleLogin(response) {
    if (response.status === "connected") {
      var accessToken = response.authResponse.accessToken;
      var userID = response.authResponse.userID;
      // api here
    } else {
      // error message here
    }
  }

  render() {

    return (
        <button className='facebook-login' onClick={this.handleClick}>
          Log in using Facebook!
        </button>
    );

  }


}
