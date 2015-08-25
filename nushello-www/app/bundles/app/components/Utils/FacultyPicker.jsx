import React  from 'react';

export default class FacultyPicker extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="faculty">Faculty</label>
        <select id="faculty" className="form-control">
          { this.props.faculties.map(function(faculty) {
            console.log(faculty);
            return <option value={ faculty.id } key={ faculty.id }>{ faculty.name }</option>;
          })}
        </select>
      </div>
    );
  }
}
