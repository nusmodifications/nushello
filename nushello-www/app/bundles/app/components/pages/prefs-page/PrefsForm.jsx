import React from 'react';
import $ from 'jquery';
import FacultyPicker from 'app/bundles/app/components/Utils/FacultyPicker'


export default class PrefsForm extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    var self = this;
    $.get('http://api.nushello.com/faculties', function(data) {
      if (data.type === "faculties") {
        self.setState({ faculties: data.data });
      }
    });
  }

  render() {
    return (
    <div className="col-sm-6 col-sm-offset-3">
      <form>
        <FacultyPicker faculties={ this.state ? this.state.faculties : [] }/>

        <div className="form-group">
          <label htmlFor="major">Major</label>
          <select id="faculty" className="form-control">
          <option>Test Major</option>
          <option>Major 2</option>
          <option>Major 3</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="modules">Modules</label>
          <input type="text" className="form-control" id="modules" />
        </div>

        <div className="form-group">
          <label>Gender</label>
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
      </form>
    </div>
    );
  }
}
