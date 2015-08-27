'use strict';
import React from 'react';

import Message from './message.jsx';

require('./messages.scss');

export default class Messages extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    var node = React.findDOMNode(this);
    console.log(node.scrollTop, node.scrollHeight);
    setTimeout(function () {
      console.log(node.scrollTop, node.scrollHeight);
      node.scrollTop = node.scrollHeight;
    }, 0);
  }

  render() {
      var msgs = [];
      var tmp = 20;
      for (var i = 0; i < tmp; i++) {
        msgs.push(<Message key={i} id={i} />);
      }
      return <div className="messages">{msgs}</div>;
  }
}
