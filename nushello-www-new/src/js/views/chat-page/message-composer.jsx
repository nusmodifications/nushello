'use strict';
import React from 'react';

const ENTER_KEY_CODE = 13;

export default class MessageComposer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { text: '' };
  }

  render() {
    return (
      <textarea id="messageField" name="messageField" autoFocus={true}
        value={this.state.text} onChange={this._onChange} onKeyDown={this._onKeyDown} />
    );
  }

  _onChange = (e) => {
    this.setState({ text: e.target.value });
  }

  _onKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) {
      e.preventDefault();
      var text = this.state.text.trim();
      if (text) {
        console.log('Found entered text' + text);
      }
      this.setState({text: ''});
    }
  }
}
