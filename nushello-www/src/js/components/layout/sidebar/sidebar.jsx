'use strict';
import React from 'react';

import SidebarControls from './sidebar-controls.jsx';
import ChatList from 'components/chat-list/chat-list.jsx';
import Logout from 'components/logout/logout.jsx';

import ChatAction from 'actions/chat-action';

export default class Sidebar extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    ChatAction.getAllConversations();
  }

  render() {
    return (
      <div className="sidebar" data-color="green">
        <div className="sidebar-wrapper">
          <div className="logo">
            <a href="/" className="simple-text">NUSHello</a>
          </div>
          <SidebarControls />
          <hr/>
          <ChatList />
          <Logout />
        </div>
      </div>
    );
  }
}
