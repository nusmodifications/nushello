import React           from 'react';

import SidebarControls from './SidebarControls';
import MatchList       from '../../pages/chat-page/MatchList';

export default class Sidebar extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {

  var bgStyle = {
    backgroundImage: 'url(/images/sidebarph.jpg)'
  };
    return (
      <div className="sidebar">
        <SidebarControls />
        <MatchList />
        <div className="sidebar-background" style={bgStyle}>
        </div>
      </div>
    );
  }
}
