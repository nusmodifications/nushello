import React           from 'react';

import Message         from './Message';

export default class Messages extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
      var msgs = [];
      var tmp = 20;
      for (var i=0; i < tmp; i++) {
        msgs.push(<Message key={i} id={i} />);
      }
      return <div className="messages">{msgs}</div>;
  }
}
