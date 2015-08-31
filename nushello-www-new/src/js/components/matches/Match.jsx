'use strict';
import React from 'react';
import _ from 'lodash';
import Reflux from 'reflux';

import Avatar from '../avatar/avatar.jsx';
import StartConvo from './StartConvo.jsx';

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
              <div className="start-convo pull-right">
                <StartConvo name={this.props.name}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
});

module.exports = Match;
