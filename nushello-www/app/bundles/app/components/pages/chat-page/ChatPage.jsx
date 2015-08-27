import React      from 'react';

import Sidebar    from '../../layouts/Sidebar/Sidebar';
import Chatbox    from './Chatbox';

export default class ChatPage extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <Chatbox />
      </div>
    );
  }
}
