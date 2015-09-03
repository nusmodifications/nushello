'use strict';

import _ from 'lodash';
import React from 'react';

var RegisterQuestion = React.createClass({
  getInitialState: function() {
    return {
      active: undefined
    };
  },

  componentWillMount: function() {
  },

  componentDidMount: function() {
  },

  componentWillReceiveProps: function(nextProps) {
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return true;
  },

  componentWillUpdate: function(nextProps, nextState) {
  },

  componentDidUpdate: function(prevProps, prevState) {
  },

  componentWillUnmount: function() {
  },

  handleClick: function(answer) {
    var self = this;
    return function() {
      self.props.handler(self.props.questionId, answer);
      self.setState({
        active: answer
      });
    };
  },

  render: function() {
    var yesClass = 'btn btn-default';
    var noClass = 'btn btn-default';
    if (this.state && this.state.active === true) {
      yesClass = `${yesClass} selected`;
    } else if (this.state && this.state.active === false) {
      noClass = `${noClass} selected`;
    }

    return (
      <div className="container">
        <div className="row">
           <div className="form-group">
              <label className="control-label">
                { this.props.text }
              </label>
              <br />
               <div className="btn-group" data-toggle={ `question-${this.props.questionId}` }>
                  <button
                    type="button"
                    onClick={ this.handleClick(true) }
                    className={ yesClass }>
                    { this.props.yesText || 'Yes' }
                  </button>
                  <button
                    type="button"
                    onClick={ this.handleClick(false) }
                    className={ noClass }>
                    { this.props.noText  || 'No' }
                  </button>
               </div>
           </div>
        </div>
      </div>
    );
  }
});

module.exports = RegisterQuestion;
