import React  from 'react';

import Footer from './../../layouts/Footer/Footer';

export default class NotFound extends React.Component {


  constructor(props, context) {
    super(props, context);
  }


  render() {

    return (
      <section id="not-found">
        Oops! Nothing here.
        <Footer/>
      </section>
    );

  }


}
