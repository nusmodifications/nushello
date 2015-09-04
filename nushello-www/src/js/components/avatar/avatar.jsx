'use strict';
import React  from 'react';

export default class Avatar extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {
    var profileBg = {
      backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16)
    };
    var classString = 'img-responsive img-circle avatar';
    if (this.props.shouldCenter) {
      classString += ' center-block';
    }
    return (
      <span className={classString} style={profileBg}>{this.props.letter}</span>
    );
  }
}
