import React  from 'react';

import Footer from './../../layouts/Footer/Footer';

export default class How extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <strong>How</strong> page here!
        <Footer/>
      </div>
    );
  }
}
