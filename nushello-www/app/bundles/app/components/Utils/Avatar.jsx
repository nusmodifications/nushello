import React  from 'react';

export default class Avatar extends React.Component {


  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <span><img className="profile-pic" src="/images/red_panda.jpg" /></span>
    );
  }
}
