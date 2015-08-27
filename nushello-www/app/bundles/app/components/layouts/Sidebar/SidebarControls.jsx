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
            <div><Link to="prefs"><img src="/images/pref.png" /></Link></div>
            <div><Link to="matches"><img src="/images/matches.png" /></Link></div>
            <div><Link to="profile"><img src="/images/userprofile.png" /></Link></div>
        </div>
      </div>
    );
  }
}
