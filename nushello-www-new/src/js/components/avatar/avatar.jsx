'use strict';
import React  from 'react';

export default class Avatar extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <span><img className="img-responsive img-circle center-block profile-pic" src="http://lorempixel.com/200/200" /></span>
    );
  }
}
