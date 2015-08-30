'use strict';
import _ from 'lodash';
import React from 'react';
import Reflux from 'reflux';
import PickersAction from 'actions/pickers-action';
import PickersStore from 'stores/pickers-store';

var FacultyPicker = React.createClass({
  mixins: [Reflux.connect(PickersStore)],

  componentWillMount: function() {
    PickersAction.fetchFaculties();
  },

  render: function() {
    var isFacultiesFatched = false;
    if (!_.isEmpty(this.state.faculties)) {
      isFacultiesFatched = true;
    }

    var options = this.props.faculties.map(function(faculty) {
      return <option value={ faculty.id } key={ faculty.id }>{ faculty.name }</option>;
    });
    return (
      <div className="form-group">
        <label htmlFor="faculty">faculty is:</label>
        <select id="faculty" className="form-control">
          { isFacultiesFatched ? options : null }
        </select>
      </div>
    );
  }
});

module.exports = FacultyPicker;
