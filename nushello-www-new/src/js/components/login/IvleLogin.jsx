'use strict';

import React  from 'react';
import cookie from 'react-cookie';
import $ from 'jquery';
import APIEndPoints from 'constants/api-end-points';

export default class IvleLogin extends React.Component {


  constructor(props, context) {
    super(props, context);

    this.ivleLogin = this.ivleLogin.bind(this);
  }

  ivleLogin(event) {
    event.preventDefault();
    this.ivleDialog = null;
    var self = this;
    if (this.ivleDialog === null || this.ivleDialog.closed) {
        var width = 255;
        var height = 210;
        var left = (screen.width / 2) - (width / 2);
        var top = (screen.height / 3) - (height / 2);
        var options = 'dependent, toolbar=no, location=no, directories=no, ' +
                      'status=no, menubar=no, scrollbars=no, resizable=no, ' +
                      'copyhistory=no, width=' + width + ', height=' + height +
                      ', top=' + top + ', left=' + left;

        const IVLE_LAPI_KEY = 'iSzkSazcU3xUMRqGuuHw2';

        var callbackUrl = window.location.protocol + '//' + window.location.host + '/ivlelogin.html';
        var popUpUrl = 'https://ivle.nus.edu.sg/api/login/?apikey=' + IVLE_LAPI_KEY + '&url=' + callbackUrl;
        this.ivleDialog = window.open(popUpUrl, '', options);

        window.ivleLoginSuccessful = function (ivleToken) {
          // Send this token to back-end to activate IVLE profile.
          if (self.props.tokenHandler) {
            $.ajax({
              url: 'https://ivle.nus.edu.sg/api/Lapi.svc/UserID_Get?APIKey=' + IVLE_LAPI_KEY + '&token=' + ivleToken,
              dataType: 'jsonp'
            }).done(function(nusnetId) {
              self.props.tokenHandler(nusnetId, ivleToken);
            });
          }
        };

      } else {
        this.ivleDialog.focus();
      }
  }

  render() {
    return (
      <button className="btn btn-primary" onClick={ this.ivleLogin }>
        IVLE Login
      </button>
    );

  }


}
