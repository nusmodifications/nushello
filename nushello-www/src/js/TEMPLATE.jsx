'use strict';

import React from 'react';
import Router from 'react-router';
import classnames from 'classnames';

class Component extends React.Component {
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

  render() {}
}

Component.propTypes = {};
Component.defaultProps = {};
Component.contextTypes = {
  router: React.PropTypes.func
};

export default Component;
