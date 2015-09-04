'use strict';
import _ from 'lodash';
import React from 'react';
import cookie from 'react-cookie';

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

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleClick(userId) {
    ChatAction.changeChat(userId);
    ChatAction.firebaseGetAll(userId);
  }

  render() {
    let self = this;
    let chatItems = _.map(this.state.users, (item) => {
      return (
        <li className="chat-item" onClick={self.handleClick.bind(this, item.id)}>
          <ChatItem key={item.id} userId={item.friend.id} id={item.id} name={item.friend.fakeName} />
        </li>
      );
    });
    return (
      <ul className="nav sidebar-controls chat-list">
        {chatItems}
      </ul>
    );
  }
}
