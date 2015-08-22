import React      from 'react';
import { Link }   from 'react-router';

export default class Layout extends React.Component {


  constructor(props, context) {
    super(props, context);
  }


  render() {

    return (
        <footer>
          <ul>
            <li><Link to="about">About</Link></li>
            <li><Link to="privacy">Privacy Policy</Link></li>
            <li><Link to="how">How It Works</Link></li>
          </ul>
        </footer>
    );

  }


}
