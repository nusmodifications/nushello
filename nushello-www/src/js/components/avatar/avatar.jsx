'use strict';
import React  from 'react';

export default class Avatar extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let id = this.props.id;
    let r = id * 27327 % 256;
    let g = id * 12363 % 187;
    let b = id * 12899 % 256;
    let profileBg = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`
    };
    let classString = 'img-responsive img-circle avatar';
    if (this.props.shouldCenter) {
      classString += ' center-block';
    }
    return (
      <span className={classString} style={profileBg}>{this.props.letter}</span>
    );
  }
}
