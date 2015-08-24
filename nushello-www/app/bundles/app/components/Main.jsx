import React from 'react';

import { Link }   from 'react-router';
import Footer from './layouts/Footer/Footer';
import FacebookLogin from './login/FacebookLoginContainer';

import cookie from 'react-cookie';

export default class Main extends React.Component {


  constructor(props, context) {
    super(props, context);

    var auth = cookie.load('auth');

    this.state = {
      auth: auth
    }
  }


  render() {

    const isLogin = typeof this.state.auth !== 'undefined';
    const loginButton = (<FacebookLogin className="btn btn-info btn-lg" appId="1467581460234203" />);

    return (
      <section id="main">
        <div className="container main-wrapper">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
            <img className="main-icon" src="/images/nushello-main-icon-s.png" />
              <div className="intro">
                <h1>NUSHello</h1>
                <h2>Say hello to a new NUS experience</h2>
                <h3><p>Get matched. Chat anonymously. Mutually reveal identities.</p>The best part? No strings attached.</h3>
                { isLogin ? null : loginButton }
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    );
  }
}
