import React  from 'react';

export default class RegisterPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Register</h1>
        <hr/>
        <form>
        <div className="form-group">
          <label htmlFor="residence">Residence</label>
          <select id="residence" className="form-control">
            <option>ABA</option>
            <option>CDC</option>
            <option>DDD</option>
          </select>
        </div>
      </form>
      </div>
    );
  }
}
