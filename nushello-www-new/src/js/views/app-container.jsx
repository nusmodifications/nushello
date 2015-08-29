'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import classnames from 'classnames';

import Sidebar from 'components/layout/sidebar/sidebar.jsx';
import Spinner from 'components/spinner.jsx';

import AuthAction from 'actions/auth-action';
import AuthStore from 'stores/auth-store';

class AppContainer extends React.Component {
  static willTransitionTo(transition, params, query) {
  }

  static willTransitionFrom(transition, component) {
  }

  constructor(props, ctx) {
    super(props);
    this.state = {
      isInitializing: true
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.unsubAuth = AuthStore.listen(this.onAuthChange.bind(this));
    AuthAction.init();
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUpdate(nextProps, nextState) {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillUnmount() {
    this.unsubAuth();
  }

  onAuthChange(response) {
    if (response.currentUser) {
      this.setState({
        isInitializing: false
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar/>
        <div className="main-panel">
          <RouteHandler />
        </div>
      </div>
    );
  }
}

AppContainer.propTypes = {};
AppContainer.defaultProps = {};
AppContainer.contextTypes = {
  router: React.PropTypes.func
};

export default AppContainer;
