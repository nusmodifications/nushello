import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';

import FacebookLogin from './FacebookLogin';

import * as FacebookLoginActions from '../../actions/FacebookLoginActions';

@connect(state => ({
  
}))

export default class FacebookLoginContainer extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {

    const { dispatch } = this.props;
    let boundActionCreators = bindActionCreators(FacebookLoginActions, dispatch);
    // returning Component with branches of the state, action creators and the rest
    return (
      <FacebookLogin
          {...boundActionCreators}
          {...this.props}
      />
    );

  }

}