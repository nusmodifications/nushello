'use strict';

import React from 'react';
import Reflux from 'reflux';
import FacultyPicker from 'components/pickers/faculty-picker.jsx';
import MajorPicker from 'components/pickers/major-picker.jsx';

require('./prefs-form.scss');

var PrefsForm = React.createClass({
  componentWillMount: function() {
  },

  componentDidMount: function() {
  },

  render: function() {
    return (
      <div className="col-sm-4 col-sm-offset-1">
        <form>
          <FacultyPicker />
          <MajorPicker />

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
