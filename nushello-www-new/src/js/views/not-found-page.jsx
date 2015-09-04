'use strict';

import React from 'react';
import Router from 'react-router';
import { Link } from 'react-router';

class NotFoundPage extends React.Component {
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
      <div className="container page not-found">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1>Oops, we&#39;re sorry!</h1>
            <h2>We couldn&#39;t find
            the page you were looking for. But if you
            wouldn&#39;t mind receiving some love, <Link to="matches">we can help.</Link></h2>
          </div>
        </div>
      </div>
    );
  }
}

NotFoundPage.propTypes = {};
NotFoundPage.defaultProps = {};
NotFoundPage.contextTypes = {
  router: React.PropTypes.func
};

export default NotFoundPage;
