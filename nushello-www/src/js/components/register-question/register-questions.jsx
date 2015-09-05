'use strict';

import _ from 'lodash';
import React from 'react';
import Reflux from 'reflux';
import RegisterQuestion from './register-question.jsx';
import RegisterQuestionsAction from 'actions/register-questions-action';
import RegisterQuestionsStore from 'stores/register-questions-store';

var RegisterQuestions = React.createClass({
  mixins: [Reflux.connect(RegisterQuestionsStore)],

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

  handleQuestion: function(id, answer) {
    RegisterQuestionsAction.updateAnswer({
      id: id,
      answer: answer
    });
  },

  render: function() {
    let partyClass = 'btn btn-default personality-btn';
    let sportsClass = 'btn btn-default personality-btn';
    let muggerClass = 'btn btn-default personality-btn';
    let introvertClass = 'btn btn-default personality-btn';

    let personalities = {
      party: null,
      sports: null,
      mugger: null,
      introvert: null
    };

    if (this.props.personalities) {
      personalities = this.props.personalities;
    }

    return (
      <div className='register-question'>
        <RegisterQuestion
          handler={ this.handleQuestion }
          questionId={ 0 }
          text="It's a Friday night, would you stay home or head out for a drink?"
          yesText="Party"
          noText="Stay home"
          answer={ personalities.party }
        />
        <RegisterQuestion
          handler={ this.handleQuestion }
          questionId={ 1 }
          text="Do you play any sports?"
          answer={ personalities.sports }
        />
        <RegisterQuestion
          handler={ this.handleQuestion }
          questionId={ 2 }
          text="It’s the finals period and your friend’s birthday party is here, what would you do?"
          yesText="Party"
          noText="Stay of course"
          answer={ personalities.mugger }
        />
        <RegisterQuestion
          handler={ this.handleQuestion }
          questionId={ 3 }
          text="Do you find that you are more of an introvert or more of an extrovert?"
          yesText="Introvert"
          noText="Extrovert"
          answer={ personalities.introvert }
        />
      </div>
    );
  }
});

module.exports = RegisterQuestions;
