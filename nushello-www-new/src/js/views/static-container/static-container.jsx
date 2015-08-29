'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';

require('./static-container.scss');

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
        <div className="static-page-banner">
          <div className="static-page-icon-container">
            <img className="static-page-icon" src={require('images/nushello-logo-words-white.png')}/>
          </div>
        </div>
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <RouteHandler/>
          </div>
        </div>
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
