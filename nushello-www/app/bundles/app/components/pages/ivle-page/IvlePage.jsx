import React  from 'react';
import $ from 'jquery';
import cookie from 'react-cookie';

import api from 'app/bundles/app/constants/APIEndpoints';

export default class Ivle extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  ivleLogin() {
    this.ivleDialog = null;
    if (this.ivleDialog === null || this.ivleDialog.closed) {
        var width = 255;
        var height = 210;
        var left = (screen.width / 2) - (width / 2);
        var top = (screen.height / 3) - (height / 2);
        var options = 'dependent, toolbar=no, location=no, directories=no, ' +
                      'status=no, menubar=no, scrollbars=no, resizable=no, ' +
                      'copyhistory=no, width=' + width + ', height=' + height +
                      ', top=' + top + ', left=' + left;

        const IVLE_LAPI_KEY = 'O8ieVUFb72IU7feHcKmO3';

        var callbackUrl = window.location.protocol + '//' + window.location.host + '/ivlelogin';
        var popUpUrl = 'https://ivle.nus.edu.sg/api/login/?apikey=' + IVLE_LAPI_KEY + '&url=' + callbackUrl;
        this.ivleDialog = window.open(popUpUrl, '', options);

        window.ivleLoginSuccessful = function (ivleToken) {
          $.get('https://ivle.nus.edu.sg/api/Lapi.svc/Profile_View', {
            'APIKey': IVLE_LAPI_KEY,
            'AuthToken': ivleToken
          }, function (data) {
            var ivleUserProfile = data.Results[0];
            var userProfile = {
              nusnetId: ivleUserProfile.UserID,
              name: ivleUserProfile.Name,
              email: ivleUserProfile.Email,
              gender: ivleUserProfile.Gender,
              faculty: ivleUserProfile.Faculty,
              firstMajor: ivleUserProfile.FirstMajor,
              secondMajor: ivleUserProfile.SecondMajor,
              matriculationYear: ivleUserProfile.MatriculationYear
            };
            console.log(userProfile);
            localStorage.setItem('ivleToken', ivleToken);
            localStorage.setItem('user', JSON.stringify(userProfile));
            console.log(localStorage.getItem('ivleToken'));

            // Do something with student profile and token

            let facebookUid = cookie.load('facebookUid');
            let NUSHelloToken = cookie.load('auth').accessToken;
            $.ajax({
              type: 'PUT',
              beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', NUSHelloToken)
              },
              url: 'http://api.nushello.com/users/' + facebookUid + '/ivle',
              data: {
                'ivleToken': localStorage.getItem('ivleToken')
              },
              success: function() {
                console.log('Facebook Token Put!');
              },
              dataType: 'json'
            });
          }, 'jsonp');

          window.ivleLoginSuccessful = undefined;
        };

      } else {
        this.ivleDialog.focus();
      }
  }

  render() {
    return (
      <div>
        <h1>IVLE Login</h1>
        <hr/>
        <p>IVLE Login is needed to ensure that you are an NUS student as this is a highly exclusive service.</p>
        <button className="btn btn-primary" onClick={this.ivleLogin.bind(this)}>IVLE Login</button>
      </div>
    );
  }
}
