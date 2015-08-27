import React      from 'react';

import Chatbox    from './chat-box.jsx';

export default class ChatPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Chatbox />
      </div>
    );
  }
}
