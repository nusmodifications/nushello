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
      conversations: []
    };
  }

  componentDidMount() {
    this.unsubscribe = ChatStore.listen((res) => {
      switch(res.action) {
        case 'getAllConversations':
          this._loadAllConversations(res.data);
          break;
        default:
          break;
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    let self = this;
    let chatItems = _.map(this.state.conversations, (item, index) => {
      return (
        <li className="chat-item" onClick={self._handleClick.bind(this, item)}>
          <ChatItem key={index} id={item.id} userId={item.friend.id} name={item.friend.fakeName} />
        </li>
      );
    });
    return (
      <ul className="nav sidebar-controls chat-list">
        {chatItems}
      </ul>
    );
  }

  _loadAllConversations(res) {
    this.setState({
      conversations: res.data
    });
  }

  _handleClick(conversation) {
    ChatAction.changeChat(conversation);
  }
}
