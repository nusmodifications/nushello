'use strict';

require('styles/components/spinner.scss');

import React from 'react';
import classnames from 'classnames';

class Spinner extends React.Component {
  constructor(props, ctx) {
    super(props);
    this.state = {
      size: this.props.size,
      kind: this.props.kind || 'puff',
      color: this.props.color || 'none'
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    var newState = {};

    if (nextProps.kind) {
      newState.kind = nextProps.kind;
    }

    if (nextProps.size) {
      newState.size = nextProps.size;
    }

    if (nextProps.color) {
      newState.color = nextProps.color;
    }

    this.setState(newState);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillUnmount() {
  }

  render() {
    var svg;

    switch (this.state.kind) {
      case 'audio':
        svg = require('images/spinners/audio.svg');
        break;
      case 'ball-triangle':
        svg = require('images/spinners/ball-triangle.svg');
        break;
      case 'bars':
        svg = require('images/spinners/bars.svg');
        break;
      case 'circles':
        svg = require('images/spinners/circles.svg');
        break;
      case 'grid':
        svg = require('images/spinners/grid.svg');
        break;
      case 'hearts ':
        svg = require('images/spinners/hearts.svg');
        break;
      case 'oval':
        svg = require('images/spinners/oval.svg');
        break;
      case 'puff':
        svg = require('images/spinners/puff.svg');
        break;
      case 'rings':
        svg = require('images/spinners/rings.svg');
        break;
      case 'spinning-circles':
        svg = require('images/spinners/spinning-circles.svg');
        break;
      case 'tail-spin':
        svg = require('images/spinners/tail-spin.svg');
        break;
      case 'three-dots':
        svg = require('images/spinners/three-dots.svg');
        break;
    }

    return (
      <div
        className={ classnames('spinner', this.state.color, this.state.size) }
        dangerouslySetInnerHTML={{ __html: svg }}>
      </div>
    );
  }
}

Spinner.propTypes = {
  kind: React.PropTypes.string
};

Spinner.defaultProps = {
  kind: 'rings'
};

Spinner.contextTypes = {};

export default Spinner;
