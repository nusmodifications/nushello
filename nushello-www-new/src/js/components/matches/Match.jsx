'use strict';
import React from 'react';
import _ from 'lodash';
import Reflux from 'reflux';

import Avatar from '../avatar/avatar.jsx';
import StartChat from './StartChat.jsx';

require('./Match.scss');

var Match = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h3><Avatar picUrl= {this.props.picUrl} />{this.props.name}</h3>
          <div className="row">
            <div className="col-sm-4">
              {this.props.bio}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="start-chat pull-right">
                <StartChat name={this.props.name} userId={this.props.key}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
});

module.exports = Match;
