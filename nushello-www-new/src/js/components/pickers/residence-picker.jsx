'use strict';
import React from 'react';

export default class ResidencePicker extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="residence">Residence</label>
        <select id="residence" className="form-control">
          { this.props.residences.map(function(residence) {
            return <option value={ residence.id } key={ residence.id }>{ residence.name }</option>;
          })}
          <option key='-1'>None</option>
        </select>
      </div>
    );
  }
}
