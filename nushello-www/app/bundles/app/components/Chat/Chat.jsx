import React      from 'react';

import Sidebar    from './Sidebar';
import Chatbox    from './Chatbox';

export default class Privacy extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Sidebar />
        <Chatbox />
      </div>
    );
  }
}
