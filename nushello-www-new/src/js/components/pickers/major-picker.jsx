'use strict';
import _ from 'lodash';
import React from 'react';
import Reflux from 'reflux';
import FacultyPickerAction from 'actions/faculty-picker-action';
import FacultyPickerStore from 'stores/faculty-picker-store';

var MajorPicker = React.createClass({
  mixins: [Reflux.connect(FacultyPickerStore)],

  getInitialState: function() {
    return {
      selectedMajorId: 1,
      majors: []
    };
  },

  handleMajorChange: function(event) {
    this.setState({
      selectedMajorId: event.target.value
    });
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (prevState.selectedFacultyId !== this.state.selectedFacultyId) {
      if (!_.isEmpty(this.state.faculties)) {
        let majors = this.state.faculties[this.state.selectedFacultyId - 1].majors;
        this.setState({
          majors: majors
        });

        let selectedId = 1;
        if (typeof majors[0] !== 'undefined') {
          selectedId = majors[0].id;
        }
        this.setState({
          selectedMajorId: selectedId
        });
      }
    }

    if (prevState.selectedMajorId !== this.state.selectedMajorId) {
      FacultyPickerAction.selectMajor(this.state.selectedMajorId);
    }
  },

  render: function() {
    return (
      <div className="form-group">
        <label htmlFor="major">major is:</label>
        <select id="major" className="form-control" onChange={ this.handleMajorChange }>
          { this.state.majors.map(function(major) {
            return <option value={ major.id } key={ major.id }>{ major.name }</option>;
          }) }
        </select>
      </div>
    );
  }
});

module.exports = MajorPicker;
