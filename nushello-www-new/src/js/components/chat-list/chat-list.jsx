'use strict';
import React from 'react';

import ChatItem  from './chat-item.jsx';
import ChatAction from 'actions/chat-action';
import ChatStore from 'stores/chat-store';

export default class MatchList extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    ChatAction.fetchConvo();
  }

  componentDidMount() {
    this.unsubscribe = ChatStore.listen((res) => {
      if (res.type === 'conversations') {
        this.setState({
          users: res.data
        });
      }
    });

  }

  render() {
    var chatItems = this.state.users.map(function (item) {
      return (
        <ChatItem key={item.id} id={item.id} name={item.friend.fakeName} />
      );
    });
    return (
      <ul className="nav sidebar-controls chat-list">
        {chatItems}
      </ul>
    );
  }
}
