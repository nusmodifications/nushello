'use strict';

import React from 'react';
import Router from 'react-router';

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
      <div className="page not-found">
        Not Found.
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
