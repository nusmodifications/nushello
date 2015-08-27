'use strict';

import React  from 'react';
import Router from 'react-router';

import Footer from 'components/layout/footer/footer.jsx';

require('./about-page.scss');

class AboutPage extends React.Component {

  constructor(props, context) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
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

AboutPage.propTypes = {};
AboutPage.defaultProps = {};
AboutPage.contextTypes = {
  router: React.PropTypes.func
};

export default AboutPage;
