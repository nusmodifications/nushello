import React      from 'react';

export default class PrefsForm extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
    <div className="col-sm-6 col-sm-offset-3">
      <form>
        <div className="form-group">
          <label htmlFor="faculty">Faculty</label>
          <select id="faculty" className="form-control">
          <option>Arts</option>
          <option>Computing</option>
          <option>Science</option>
          </select>
        </div>

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
