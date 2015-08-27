'use strict';
import React from 'react';

import MessageComposer from './message-composer.jsx';

require('./convo-controls.scss');

export default class ConvoControls extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="convo-controls">
        <MessageComposer/>
      </div>
    );
  }
}
