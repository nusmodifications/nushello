'use strict';
import React  from 'react';
import ProfileAction from 'actions/profile-action';
import ProfileStore from 'stores/profile-store';

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
    this.unsubscribe = ProfileStore.listen(this.onStatusChange.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(res) {
    this.setState({ bio: res.data.bio });
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
    let newBio = React.findDOMNode(this.refs.newBio).value;
    ProfileAction.edit(newBio);
    this.handleClick();
  }

  render() {
    let bio =
      <div className="profile-edit">
        <p><em>{ this.state.bio }</em></p>
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

