import React  from 'react';
import $ from 'jquery';
import ResidencePicker from 'app/bundles/app/components/Utils/ResidencePicker'

export default class RegisterPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    var self = this;
    $.get('http://api.nushello.com/residences', function(data) {
      if (data.type === "residences") {
        self.setState({ residences: data.data });
      }
    });
  }

  render() {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Register</h1>
        <hr/>
        <form>
        <ResidencePicker residences={ this.state ? this.state.residences : [] }/>
      </form>
      </div>
    );
  }
}
