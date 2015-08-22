import React  from 'react';

import Footer from './../../layouts/Footer/Footer';

export default class About extends React.Component {

  constructor(props, context) {
    super(props, context);
  }


  render() {

    return (
        <section id="about">
          <strong>About</strong> page here!
          <Footer/>
        </section>
    );

  }


}
