import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { mixin } from 'core-decorators';

@mixin(PureRenderMixin)
class TestComponent extends Component {

  render() {
    return (
      <div className="TestComponent">
        Hello, world! I am a TestComponent.
      </div>
    );
  }

}

export default TestComponent;