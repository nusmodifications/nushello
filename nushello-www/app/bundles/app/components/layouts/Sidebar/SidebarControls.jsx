import React           from 'react';
import { Link }        from 'react-router';

export default class SidebarControls extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="sidebar-controls">
        <div className="sidebar-nav">
          <ul>
            <li><Link to="prefs"><img src="/images/prefs.png" /></Link></li>
            <li><Link to="matches"><img src="/images/users.png" /></Link></li>
            <li><Link to="profile"><img src="/images/user.png" /></Link></li>
          </ul>
        </div>
      </div>
    );
  }
}
