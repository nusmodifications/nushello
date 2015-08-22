import React       from 'react';

import PrefsForm   from './PrefsForm';

export default class How extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container prefs">
        <div className="row">
          <div className="col-sm-3 col-sm-offset-3">
            <h1>Enter your preferences</h1>
          </div>
        </div>
        <div className="row">
          <PrefsForm />
        </div>
      </div>
    );
  }
}
