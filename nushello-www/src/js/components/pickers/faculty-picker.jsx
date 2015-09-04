'use strict';
import _ from 'lodash';
import React from 'react';
import Reflux from 'reflux';
import FacultyPickerAction from 'actions/faculty-picker-action';
import FacultyPickerStore from 'stores/faculty-picker-store';

var FacultyPicker = React.createClass({
  mixins: [Reflux.connect(FacultyPickerStore)],

  componentWillMount: function() {
    FacultyPickerAction.fetchFaculties();
  },

  handleFacultyChange: function(event) {
    FacultyPickerAction.selectFaculty(event.target.value);
  },

  render: function() {
    let faculties = [];
    if (!_.isEmpty(this.state.faculties)) {
      faculties = this.state.faculties;
    }

    let defaultFacultyId = this.props.facultyId;
    if (!_.isEmpty(this.state.selectedFacultyId) && (this.state.selectedFacultyId !== -1)) {
      defaultFacultyId = this.state.selectedFacultyId;
    }

    return (
      <div className="form-group">
        <label htmlFor="faculty">faculty is:</label>
        <select id="faculty" value={ defaultFacultyId } className="form-control" onChange={ this.handleFacultyChange }>
          { faculties.map(function(faculty) {
            return <option value={ faculty.id } key={ faculty.id }>{ faculty.name }</option>;
          })}
        </select>
      </div>
    );
  }
});

module.exports = FacultyPicker;
