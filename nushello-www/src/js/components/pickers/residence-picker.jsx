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

  handleResidenceChange: function(event) {
    ResidencePickerAction.selectResidence(event.target.value);
  },

  render: function() {
    let residences = [];
    if (!_.isEmpty(this.state.residences)) {
      residences = this.state.residences;
    }

    let defaultResidenceId = this.props.residenceId;
    if (!_.isEmpty(this.state.selectedResidence) && (this.state.selectedResidence !== -1)) {
      defaultResidenceId = this.state.selectedResidence;
    }

    return (
      <div className="form-group">
        <label htmlFor="residence">residence</label>
        <select id="residence" value={ defaultResidenceId } onChange={ this.handleResidenceChange } className="form-control">
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
