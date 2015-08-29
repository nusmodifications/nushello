'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import classnames from 'classnames';

import Sidebar from 'components/layout/sidebar/sidebar.jsx';
import Spinner from 'components/spinner.jsx';

import AuthAction from 'actions/auth-action';
import AuthStore from 'stores/auth-store';

class MainContainer extends React.Component {
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
    var spinner = (
      <div className={ classnames('spinner-wrapper', { hidden: !this.state.isInitializing }) }>
        <Spinner kind="puff"/>
      </div>
    );

    var mainContainer = (
      <div className={ classnames({ hidden: this.state.isInitializing, wrapper: true }) }>
        <RouteHandler />
      </div>
    );

    return (
      <div className="app-container">
        {(this.state.isInitializing) ? spinner : mainContainer }
      </div>
    );
  }
}

MainContainer.propTypes = {};
MainContainer.defaultProps = {};
MainContainer.contextTypes = {
  router: React.PropTypes.func
};

export default MainContainer;
