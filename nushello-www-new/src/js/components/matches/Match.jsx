'use strict';
import React from 'react';
import _ from 'lodash';
import Reflux from 'reflux';

import Avatar from '../avatar/avatar.jsx';
import StartChat from './StartChat.jsx';

var Match = React.createClass({
  render: function() {
    var initial = this.props.fakeName[0].toUpperCase();
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 match-card">
        <div className="card">

          <div className="title">
            <div className="match-profile-pic"><Avatar letter={initial} shouldCenter /></div>
          </div>

          <div className="content">

            <div className="row">
              <div className="col-sm-12 match-detail">
                <h3>{this.props.fakeName}</h3>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 match-detail">
                <p>{this.props.bio}</p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 match-detail">
                <StartChat name={this.props.fakeName} userId={this.props.key}/>
              </div>
            </div>

          </div>
        </div>
      </div>
      );
  }
});

module.exports = Match;
