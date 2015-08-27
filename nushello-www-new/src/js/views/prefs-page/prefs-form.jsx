'use strict';
import React from 'react';
import $ from 'jquery';
import FacultyPicker from 'components/pickers/faculty-picker.jsx';

require('./prefs-form.scss');

export default class PrefsForm extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    var self = this;
    $.get('http://api.nushello.com/faculties', function(data) {
      if (data.type === 'faculties') {
        self.setState({ faculties: data.data });
      }
    });
  }

  render() {
    return (
    <div className="col-sm-4 col-sm-offset-1">
      <form>
        <FacultyPicker faculties={ this.state ? this.state.faculties : [] }/>

        <div className="form-group">
          <label htmlFor="major">major is:</label>
          <select id="faculty" className="form-control">
          <option>Test Major</option>
          <option>Major 2</option>
          <option>Major 3</option>
          </select>
        </div>

        <div className="form-group">
          <label>and gender is:</label>
          <div className="checkbox">
            <label><input type="checkbox" value="0" />
              Female
            </label>
          </div>
          <div className="checkbox">
            <label><input type="checkbox" value="1" />
              Male
            </label>
          </div>
        </div>

        <input className="btn btn-default" type="submit" value="Alright, let's go!" />
      </form>
    </div>
    );
  }
}
