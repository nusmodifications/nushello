import React           from 'react';
import MessageComposer from './MessageComposer'

export default class ConvoControls extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="convo-controls">
	      	<MessageComposer />
      </div>
    );
  }
}
