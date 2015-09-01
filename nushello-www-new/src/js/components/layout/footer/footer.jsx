'use strict';
import React from 'react';
import { Link } from 'react-router';
import FacebookLike from '../../buttons/facebook-like.jsx';

require('./footer.scss');

export default class Footer extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <nav className="pull-left">
            <ul>
              <li>
                <li><Link to="about">About</Link></li>
              </li>
              <li>
                <li><Link to="privacy">Privacy Policy</Link></li>
              </li>
              <li>
                <li><a href="mailto:nushello@gmail.com">Talk to us</a></li>
              </li>
              <li>
                <FacebookLike />
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            © 2015 NUSHello Team, made <s>with</s> for love
          </p>
        </div>
      </footer>
    );
  }
}
