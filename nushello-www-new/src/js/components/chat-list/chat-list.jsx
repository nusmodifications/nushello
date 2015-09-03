'use strict';
import React from 'react';

import ChatItem  from './chat-item.jsx';

export default class MatchList extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      users: [
        {id: 1, username: 'Xinan', photoUrl: 'https://graph.facebook.com/100000412271842/picture'},
        {id: 2, username: 'Bili', photoUrl: 'https://graph.facebook.com/831169440/picture'}
      ]
    };
  }

  render() {
    var chatItems = this.state.users.map(function (item) {
      return (
        <ChatItem key={item.id} name={item.username} photoUrl={item.photoUrl} />
      );
    });
    return (
      <ul className="nav sidebar-controls chat-list">
        {chatItems}
      </ul>
    );
  }
}
