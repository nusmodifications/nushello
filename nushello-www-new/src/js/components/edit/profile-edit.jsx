'use strict';
import React  from 'react';
import ProfileAction from 'actions/profile-action';

require('./profile-edit.scss');

export default class ProfileEdit extends React.Component {


  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.setState({ mode: 'view' });
  }

  handleClick() {
    let mode = 'edit';
    if (this.state.mode === 'edit') {
      mode = 'view';
    }
    this.setState({ mode: mode });
  }

  render() {
    let bio =
      <div className="profile-edit">
        <p><em>I love my life</em></p>
        <button onClick={ this.handleClick } className="btn btn-default">Edit Bio</button>
      </div>;

    if (this.state.mode === 'edit') {
      bio =
        <div className="profile-edit">
          <input className="form-control" type="text" />
          <button className="btn btn-default" onClick={ this.handleClick }>Save</button>
        </div>;
    }

    return (
      bio
    );

  }
}

