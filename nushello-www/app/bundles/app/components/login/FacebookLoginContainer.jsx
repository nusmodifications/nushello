import React                    from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';

import FacebookLogin from './FacebookLogin';

import * as FacebookLoginActions from '../../actions/Login/FacebookLoginActions';

@connect(state => ({
  
}))

export default class FacebookLoginContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    console.log(this.props);
    const { dispatch } = this.props;
    return (
      <FacebookLogin 
        FacebookLoginActions={bindActionCreators(FacebookLoginActions, dispatch)}
        {...this.props}
      />
    );

  }

}