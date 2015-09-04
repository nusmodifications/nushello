'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import { Link } from 'react-router';

import Footer from 'components/layout/footer/footer.jsx';

class StaticPage extends React.Component {
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
    return (
      <div className="static-container">
        <div className="static-wrapper">
          <div className="static-page-banner">
            <div className="static-page-icon-container">
              <Link to="home">
                <img className="static-page-icon" src={require('images/nushello-logo-words-white.png')}/>
              </Link>
            </div>
          </div>
          <div className="container">
            <div className="col-md-8 col-md-offset-2 static-page-content">
              <RouteHandler/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

StaticPage.propTypes = {};
StaticPage.defaultProps = {};
StaticPage.contextTypes = {
  router: React.PropTypes.func
};

export default StaticPage;
