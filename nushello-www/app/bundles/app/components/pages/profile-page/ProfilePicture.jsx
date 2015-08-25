import React from 'react';

export default class ProfilePicture extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <img className="img-responsive img-circle" src="http://lorempixel.com/200/200"/>
    );
  }
}
