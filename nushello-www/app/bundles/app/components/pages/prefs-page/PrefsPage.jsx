import React       from 'react';

import Sidebar     from '../../layouts/Sidebar/Sidebar';
import PrefsForm   from './PrefsForm';
import Footer      from '../../layouts/Footer/Footer'

export default class PrefsPage extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="container prefs">
          <div className="row">
            <div className="col-sm-7 col-sm-offset-1">
              <h1>I'm looking for a friend whose...</h1>
            </div>
          </div>
          <div className="row">
            <PrefsForm hah="aa"/>
          </div>
        </div>
      </div>
    );
  }
}
