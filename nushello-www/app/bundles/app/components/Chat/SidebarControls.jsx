import React           from 'react';

import Avatar          from '../Utils/Avatar'

export default class How extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="match-list">
        <ul>
        <li><Avatar />Mr. A</li>
        <li><Avatar />Mr. B</li>
        </ul>
      </div>
    );
  }
}
