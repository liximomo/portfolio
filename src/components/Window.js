import React, { Component, PropTypes } from 'react';
import Speech from '../components/Speech';

class Window extends Component {
  render() {
    return (
      <div style={style} >
        <Speech speech={{content: 'hello!'}}/>
        <Speech speech={{reply: true, content: 'hi!'}}/>
      </div>
    )
  }
}

const style = {
  border: '1px solid black',
}

export default Window;