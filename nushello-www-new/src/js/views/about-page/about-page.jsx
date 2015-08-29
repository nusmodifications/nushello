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
      <div>
        <div className="row about-wrapper">
          <div className="col-sm-6 col-sm-offset-3">
            <div className="card">
              <div className="header">
                <h2 className="title" id="title">About</h2>
                </div>
              <div className="content">
                <p>NUSHello is anonymous, real-time chatting made exclusively for the
                NUS community to discover and make new friends.</p>
                </div>
              </div>
              <div className="card">
                <div className="header">
                  <h2 className="title" id="title">Why NUSHello?</h2>
                  </div>
                <div className="content">
                  <p>You might find it difficult to make new friends (platonic or not) without joining
                  numerous CCAs and attending orientation camps. In lectures and tutorials, you
                  find a convenient seat at the corner, or otherwise leave the appropriate
                  one-chair-away-distance from strangers you do not know. Other social networking
                  apps either consist of people you already know (bah, the same old stories) or
                  are too full of noise (Tinder? NOPE!). So you go instead to NUSWhispers,
                  anonymously seeking some solution.</p>
                  <p>NUSHello is that solution you have been searching for.</p>
                 </div>
               </div>
            </div>
          </div>
        <Footer/>
      </div>
    );
  }
}

AboutPage.propTypes = {};
AboutPage.defaultProps = {};
AboutPage.contextTypes = {
  router: React.PropTypes.func
};

export default AboutPage;
