import React  from 'react';

export default class Ivle extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>IVLE Login</h1>
        <hr/>
        <p>IVLE Login is needed to ensure that you are an NUS student as this is a highly exclusive service</p>
        <button className="btn btn-primary">IVLE Login</button>
      </div>
    );
  }
}
