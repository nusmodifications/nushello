'use strict';

import React from 'react';
import Router from 'react-router';

import Footer from 'components/layout/footer/footer.jsx';
import FacebookLogin from 'components/login/FacebookLogin.jsx';

require('./login.scss');

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
      <div>
        <div className="row login-wrapper">
          <div className="col-sm-6 col-sm-offset-3">

            <img className="main-icon" src={require('images/nushello-main-icon-s.png')}/>
            <div className="intro">
              <h1>NUSHello</h1>
              <h2>Say hello to a new NUS experience</h2>
              <h3><p>Get matched. Chat anonymously. Mutually reveal identities.</p>The best part? No strings attached.</h3>
              { isLogin ? null : loginButton }
            </div>
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
