'use strict';
import React from 'react';

import MessageComposer from './message-composer.jsx';

export default class ConvoControls extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="convo-controls">
        <MessageComposer convoId={this.props.convoId}/>
      </div>
    );
  }
}
