import React, { Component, PropTypes } from 'react';
import Speech from '../components/Speech';
import Record from '../components/Record'; 

class Window extends Component {
  render() {
    return (
      <div className="absolute-center mobile" >
        <div className="screen">
          <Record speech={{content: 'hello!'}}/>
          <Record speech={{reply: true, content: 'hi!'}}/>
        </div>
      </div>
    )
  }
}

export default Window;