'use strict';
import React from 'react';
import { Link } from 'react-router';

require('./footer.scss');

export default class Footer extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
    <footer className="footer">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <div className="footer-content">
          <ul>
            <li><Link to="about">About</Link></li>
            <li><Link to="privacy">Privacy Policy</Link></li>
            <li><a href="mailto:nushello@gmail.com">Talk to us</a></li>
          </ul>
          </div>
        </div>
      </div>
      </footer>
    );
  }
}
