import React, { Component, PropTypes } from 'react';

class Window extends Component {

  render() {
    return (
      <div className="absolute-center mobile" >
        <div className="screen" ref="screen">
         { this.props.children } 
        </div>
      </div>
    )
  }
}

export default Window;