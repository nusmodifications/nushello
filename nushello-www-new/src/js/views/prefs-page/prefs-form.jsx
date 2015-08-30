'use strict';
import _ from 'lodash';
import React from 'react';
import Reflux from 'reflux';
import FacultyPicker from 'components/pickers/faculty-picker.jsx';
import MajorPicker from 'components/pickers/major-picker.jsx';
import PickersAction from 'actions/pickers-action';
import PickersStore from 'stores/pickers-store';

require('./prefs-form.scss');

var PrefsForm = React.createClass({
  mixins: [Reflux.connect(PickersStore)],

  componentWillMount: function() {
    PickersAction.fetchFaculties();
    this.setState({ selectedFacultyId: 1 });
  },

  componentDidMount: function() {
  },

  handleFacultyChange: function(event) {
    this.setState({ selectedFacultyId: event.target.value });
  },

  render: function() {
    // need to figure out a better api response structure for the faculties list,
    // now just assume the faculty array is sorted according to faculty id.
    var isFacultiesFatched = false;
    if (!_.isEmpty(this.state.faculties)) {
      isFacultiesFatched = true;
    }

    return (
      <div className="col-sm-4 col-sm-offset-1">
        <form>
          <FacultyPicker faculties={ isFacultiesFatched ? this.state.faculties : [] } onChange={ this.handleFacultyChange } />

          <MajorPicker majors={ isFacultiesFatched ? this.state.faculties[this.state.selectedFacultyId - 1].majors : [] }/>

          <div className="form-group">
            <label>and gender is:</label>
            <label className="checkbox">
              <input type="checkbox" value="0" data-toggle="checkbox" />
              Female
            </label>
            <label className="checkbox">
              <input type="checkbox" value="1" data-toggle="checkbox" />
              Male
            </label>
          </div>

          <input className="btn btn-default" type="submit" value="Alright, let's go!" />
        </form>
      </div>
    );
  }
});

module.exports = PrefsForm;
