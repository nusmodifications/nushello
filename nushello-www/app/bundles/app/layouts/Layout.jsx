import React                    from 'react';
import { PropTypes as Type }    from 'react';

export default class Layout extends React.Component {


  static propTypes = {
    children: Type.object
  }


  constructor(props, context) {
    super(props, context);
  }


  render() {

    return (
      <section id="layout">
        {this.props.children}
      </section>
    );

  }


}
