import React  from 'react';

import Footer from './../../layouts/Footer/Footer';

export default class Privacy extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <strong>Privacy</strong> page here!
        <Footer/>
      </div>
    );
  }
}
