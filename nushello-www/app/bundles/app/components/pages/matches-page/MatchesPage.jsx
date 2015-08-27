import React      from 'react';

import Sidebar    from '../../layouts/Sidebar/Sidebar';

export default class MatchesPage extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
      <div className="container matches">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-1">
              <h1>All Friend Matches</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
