import React           from 'react';

import ConvoControls   from './ConvoControls'
import Messages        from './Messages'

export default class Chatbox extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="chatbox">
        <div className="messages">
        <Messages />
        </div>
        <div className="input">
        <ConvoControls />
        </div>
      </div>
    );
  }
}
