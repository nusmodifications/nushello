'use strict';

import _ from 'lodash';
import React from 'react';

require('./register-question.scss');

var RegisterQuestion = React.createClass({
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
    console.log(this.state);
    if (!_.isEmpty(this.state.currentUser)) {
      if (this.state.currentUser.type === 'newUser') {
        this.transitionTo('register');
      } else if (this.state.currentUser.type === 'existingUser') {
        this.transitionTo('chat');
      }
    }
  },

  componentWillUnmount: function() {
  },

  render: function() {
    return (
      <div className="container">
        <div className="row">
           <div className="form-group">
              <label className="control-label">
                { this.props.text }
              </label>
              <br />
               <div className="btn-group" data-toggle="buttons">
                  <button type="button" className="btn btn-default active">Yes</button>
                  <button type="button" className="btn btn-default active">No</button>
               </div>
           </div>
        </div>
      </div>
    );
  }
});

module.exports = RegisterQuestion;
