import React, { Component, PropTypes } from 'react';
import Speech from '../components/Speech';
import Record from '../components/Record'; 
import _ from 'lodash'; 

class Window extends Component {
  componentDidMount () {
    const { addSpeech } = this.props.actions;
    addSpeech({
      id: 1,
      content: '你好!',
      next:2,
    });
  }

  componentDidUpdate () {
    var screen = this.refs.screen;
    screen.scrollTop = screen.scrollHeight;

    const speeches = this.props.speeches;
    const lastSpeech = speeches[speeches.length-1];
    const { replySpeech } = this.props.actions;
    replySpeech(lastSpeech);
  }

  render() {
    return (
      <div className="absolute-center mobile" >
        <div className="screen" ref="screen">
          {_.map(this.props.speeches, speech => 
            <Record key={speech.id} speech={speech}/>
          )}
        </div>
      </div>
    )
  }
}

export default Window;