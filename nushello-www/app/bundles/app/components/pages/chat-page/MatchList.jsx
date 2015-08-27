import React from 'react';

import Match  from './Match';

export default class MatchList extends React.Component {

  constructor(props, context) {
    super(props,context);
    this.state = { users: [
      {id: 1, username: 'some_guy_990', photo: '/images/red_panda.jpg'},
      {id: 2, username: 'some_girl_099', photo: '/images/red_panda.jpg'}]}
  }

  render(){
    var matches = this.state.users.map(function (m) {
      return (
        <Match key={m.id} name={m.username} photo={m.photo} />
        );
    });
    return (
      <div className="match-list">
        {matches}
      </div>
      );
  }
}
