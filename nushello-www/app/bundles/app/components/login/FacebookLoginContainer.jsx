import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';

import FacebookLogin from './FacebookLogin';

import * as FacebookLoginActions from '../../actions/Login/FacebookLoginActions';

@connect(state => ({
  auth    : state.facebookLogin.auth,
}))

export default class FacebookLoginContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { dispatch, auth } = this.props; 
    return (
      <FacebookLogin 
        FacebookLoginActions={bindActionCreators(FacebookLoginActions, dispatch)}
        auth={ auth }
        {...this.props}
      />
    );

  }

}