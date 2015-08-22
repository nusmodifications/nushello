import React           from 'react';

import SidebarControls from './SidebarControls'

export default class Privacy extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {

  var bgStyle = {
    backgroundImage: 'url(/images/sidebarph.jpg)'
  };
    return (
      <div className="sidebar">
        <div className="sidebar-background" style={bgStyle}>
        </div>
        <SidebarControls />
      </div>
    );
  }
}
