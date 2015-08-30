'use strict';
import React  from 'react';
import ProfileAction from 'actions/profile-action';

require('./profile-edit.scss');

export default class ProfileEdit extends React.Component {


  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({
      mode: 'view'
    });
  }

  componentDidMount() {
    this.unsubscribe = '';
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(res) {

  }

  handleClick() {
    let mode = 'edit';
    if (this.state.mode === 'edit') {
      mode = 'view';
    }
    this.setState({ mode: mode });
  }

  handleSubmit(e) {
    // Prevents the page from submitting request to server
    e.preventDefault();
    let newBio = React.findDOMNode(this.refs.newBio);
    this.handleClick();
  }

  render() {
    let bio =
      <div className="profile-edit">
        <p><em>I love my life</em></p>
        <button onClick={ this.handleClick } className="btn btn-default">Edit Bio</button>
      </div>;

    if (this.state.mode === 'edit') {
      bio =
        <form className="profile-edit" onSubmit={ this.handleSubmit }>
          <input className="form-control" type="text" ref="newBio" />
          <input type="submit" value="Save" className="btn btn-default" />
        </form>;
    }

    return (
      bio
    );

  }
}

