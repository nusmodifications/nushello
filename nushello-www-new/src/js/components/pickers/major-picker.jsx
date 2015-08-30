'use strict';
import React from 'react';

var MajorPicker = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <div className="form-group">
        <label htmlFor="major">major is:</label>
        <select id="major" className="form-control">
          { this.props.majors.map(function(major) {
            return <option value={ major.id } key={ major.id }>{ major.name }</option>;
          }) }
        </select>
      </div>
    );
  }
});

module.exports = MajorPicker;
