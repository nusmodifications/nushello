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
  }

  componentDidMount() {
    this.unsubscribe = ChatStore.listen((res) => {
      switch(res.action) {
        case 'getAllConversations':
          this._loadAllConversations(res.data);
          break;
        default:
          console.log('Invalid action - ', res.action);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    let self = this;
    let chatItems = _.map(this.state.users, (item) => {
      return (
        <li className="chat-item" onClick={self._handleClick.bind(this, item.id)}>
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

  _loadAllConversations(res) {
    console.log(res);
    this.setState({
      users: res.data
    });
  }

  _handleClick(convoId) {
    ChatAction.getAllMessages(convoId);
  }
}
