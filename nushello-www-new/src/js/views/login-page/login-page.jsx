'use strict';

import React from 'react';
import Router from 'react-router';

import Footer from 'components/layout/footer/footer.jsx';
import FacebookLogin from 'components/login/FacebookLogin.jsx';

require('./login-page.scss');

class LoginPage extends React.Component {
  static willTransitionTo(transition, params, query) {
  }

  static willTransitionFrom(transition, component) {
  }

  constructor(props, ctx) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillUnmount() {
  }

  render() {
    // const isLogin = typeof this.state.auth !== 'undefined';
    const isLogin = false;
    const loginButton = (<FacebookLogin appId="1467581460234203" />);

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
          </div>
          <div className="intro">
            <br/>
            { isLogin ? null : loginButton }
            <br/>
            <p>Get matched. Chat anonymously. Mutually reveal identities.</p>
            <p>The best part? No strings attached.</p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

LoginPage.propTypes = {};
LoginPage.defaultProps = {};
LoginPage.contextTypes = {
  router: React.PropTypes.func
};

export default LoginPage;
