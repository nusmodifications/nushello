'use strict';
import React from 'react';

var FacultyPicker = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <label htmlFor="faculty">faculty is:</label>
        <select id="faculty" className="form-control" onChange={ this.props.onChange }>
          { this.props.faculties.map(function(faculty) {
            return <option value={ faculty.id } key={ faculty.id }>{ faculty.name }</option>;
          }) }
        </select>
      </div>
    );
  }
});

module.exports = FacultyPicker;
