'use strict';

import React from 'react';
import Reflux from 'reflux';
import FacultyPicker from 'components/pickers/faculty-picker.jsx';
import MajorPicker from 'components/pickers/major-picker.jsx';

var PrefsForm = React.createClass({
  getInitialState: function() {
    return {
      male: false,
      female: false
    };
  },

  componentWillMount: function() {
  },

  componentDidMount: function() {
  },

  toggleMale: function() {
    console.log(this.state);
    this.setState({
      male: !this.state.male
    });
  },

  toggleFemale: function() {
    this.setState({
      female: !this.state.female
    });
  },

  render: function() {
    var maleClass = 'btn btn-default';
    var femaleClass = 'btn btn-default';
    if (this.state && this.state.male) {
      maleClass = `${maleClass} selected`;
    }
    if (this.state && this.state.female) {
      femaleClass = `${femaleClass} selected`;
    }

    return (
      <div className="col-sm-4 col-sm-offset-1">
        <form>
          <FacultyPicker />
          <MajorPicker />

          <div className="form-group">
              <label className="control-label">
                and gender is:
              </label>
              <br />
               <div className="btn-group" data-toggle='gender'>
                  <button
                    type="button"
                    onClick={ this.toggleMale }
                    className={ maleClass }>
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={ this.toggleFemale }
                    className={ femaleClass }>
                    Female
                  </button>
               </div>
           </div>

          <input className="btn btn-default" type="submit" value="Alright, let's go!" />
        </form>
      </div>
    );
  }
});

module.exports = PrefsForm;
