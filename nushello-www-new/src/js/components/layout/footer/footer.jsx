import React      from 'react';
import { Link }   from 'react-router';

require('./footer.scss');

export default class Footer extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
    <section id="footer">
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <div className="footer">
          <ul>
            <li><Link to="about">About</Link></li>
            <li><Link to="privacy">Privacy Policy</Link></li>
            <li><Link to="how">How It Works</Link></li>
          </ul>
          </div>
        </div>
      </div>
      </section>
    );
  }
}
