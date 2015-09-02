'use strict';
import _ from 'lodash';
import React from 'react';
import Reflux from 'reflux';
import ResidencePickerAction from 'actions/residence-picker-action';
import ResidencePickerStore from 'stores/residence-picker-store';

var ResidencePicker = React.createClass({
  mixins: [Reflux.connect(ResidencePickerStore)],

  componentWillMount: function() {
    ResidencePickerAction.fetchResidences();
  },

  render: function() {
    let residences = [];
    if (!_.isEmpty(this.state.residences)) {
      residences = this.state.residences;
    }

    return (
      <div className="form-group">
        <label htmlFor="residence">Residence</label>
        <select id="residence" className="form-control">
          <option key='-1'>None</option>
          { residences.map(function(residence) {
            return <option value={ residence.id } key={ residence.id }>{ residence.name }</option>;
          })}
        </select>
      </div>
    );
  }
});

module.exports = ResidencePicker;
