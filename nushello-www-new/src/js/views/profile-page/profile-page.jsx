'use strict';
import React from 'react';
import Avatar from '../../components/avatar/avatar.jsx';

require('./profile-page.scss');

export default class ProfilePage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div className="container-fluid profile">
          <div className="row">

            <div className="col-md-3 text-center">
              <Avatar />
              <h2>Xu Bili</h2>
              <p><em>I love my life</em></p>
              <button className="btn btn-default">
                Edit Bio
              </button>
            </div>

            <div className="col-md-9">
              <div className="col-md-12">
                <div className="notifications">
                  <h2>Notifications</h2>
                  <hr/>
                  <ul>
                    <li>Fanli liked you!</li>
                    <li>Fanli liked you!</li>
                    <li>Fanli liked you!</li>
                    <li>Fanli liked you!</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-12">
                <div className="activities">
                  <h2>Latest Activites</h2>
                  <hr/>
                  <ul>
                    <li>Fanli liked you!</li>
                    <li>Fanli liked you!</li>
                    <li>Fanli liked you!</li>
                    <li>Fanli liked you!</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
