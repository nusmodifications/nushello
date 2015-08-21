import React  from 'react';


export default class FacebookLogin extends React.Component {


  constructor(props, context) {
    super(props, context);
  }


  render() {

    return (
        <button className='facebook-login' onClick="">
          Log in using Facebook!
        </button>
    );

  }


}
