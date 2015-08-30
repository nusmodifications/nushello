'use strict';
import _ from 'lodash';
import React from 'react';
import Reflux from 'reflux';
import ResidencePicker from 'components/pickers/residence-picker.jsx';
import PickersAction from 'actions/pickers-action';
import PickersStore from 'stores/pickers-store';

require('./register-page.scss');

var RegisterPage = React.createClass({
  mixins: [Reflux.connect(PickersStore)],

  componentWillMount: function() {
    PickersAction.fetchResidences();
  },

  render: function() {
    console.log(this.state);
    var isResidencesFatched = false;
    if (!_.isEmpty(this.state.residences)) {
      isResidencesFatched = true;
    }

    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Register</h1>
        <hr/>
        <form>
          <ResidencePicker residences={ isResidencesFatched ? this.state.residences : [] }/>
        </form>
      </div>
    );
  }
});

module.exports = RegisterPage;
