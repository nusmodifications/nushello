import React           from 'react';
import { Link }        from 'react-router';

export default class Match extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
      var userProfilePage = "/";
      return (
        <div className="match"><Link to={userProfilePage}>
        <img className="profile-pic" src={this.props.photo} />
        {this.props.name}</Link>
        </div>);
  }
}
