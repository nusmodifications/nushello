import React from 'react';

import { Link }   from 'react-router';
import Footer from './layouts/Footer/Footer';
import FacebookLogin from './Login/FacebookLoginContainer';

export default class Main extends React.Component {


  constructor(props, context) {
    super(props, context);
  }


  render() {

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
                <Link className="btn btn-info btn-lg" to="/chat">Facebook Login</Link>
                <FacebookLogin appId="1467581460234203" />
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    );
  }
}
