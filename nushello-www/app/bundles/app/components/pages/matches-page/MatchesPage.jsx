import React      from 'react';

import Sidebar    from '../../layouts/Sidebar/Sidebar';

export default class MatchesPage extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container matches">
        <Sidebar />
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h1>All Friend Matches</h1>
            </div>
          </div>
      </div>
    );
  }
}
