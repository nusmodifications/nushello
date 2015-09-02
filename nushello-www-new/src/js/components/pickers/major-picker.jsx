'use strict';
import _ from 'lodash';
import React from 'react';
import Reflux from 'reflux';
import FacultyPickerAction from 'actions/faculty-picker-action';
import FacultyPickerStore from 'stores/faculty-picker-store';

var MajorPicker = React.createClass({
  mixins: [Reflux.connect(FacultyPickerStore)],

  render: function() {
    let majors = [];
    if (!_.isEmpty(this.state.faculties)) {
      majors = this.state.faculties[this.state.selectedFacultyId - 1].majors;
    }

    return (
      <div className="form-group">
        <label htmlFor="major">major is:</label>
        <select id="major" className="form-control">
          { majors.map(function(major) {
            return <option value={ major.id } key={ major.id }>{ major.name }</option>;
          }) }
        </select>
      </div>
    );
  }
});

module.exports = MajorPicker;
