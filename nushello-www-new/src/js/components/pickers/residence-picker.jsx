'use strict';
import React from 'react';

var ResidencePicker = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <label htmlFor="residence">Residence</label>
        <select id="residence" className="form-control">
          <option key='-1'>None</option>
          { this.props.residences.map(function(residence) {
            return <option value={ residence.id } key={ residence.id }>{ residence.name }</option>;
          })}
        </select>
      </div>
    );
  }
});

module.exports = ResidencePicker;
