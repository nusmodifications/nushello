import React            from 'react';

import SidebarControls  from './sidebar-controls.jsx';
import ChatList         from 'components/chat-list/chat-list.jsx';

require('./sidebar.scss');

export default class Sidebar extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <div className="sidebar" data-color="green" data-image="assets/img/sidebar-5.jpg">
        <div className="sidebar-wrapper">
          <div className="logo">
            <a href="/" className="simple-text">NUSHello</a>
          </div>
          <SidebarControls/>
          <hr/>
          <ChatList/>
        </div>
      </div>
    );
  }
}
