import React, { Component, PropTypes } from 'react';
import Record from './Record';
import _ from 'lodash';

//talkflow app
class TalkFlow extends Component {
  componentDidMount () {
    const { addSpeech } = this.props.actions;
    addSpeech({
      id: 1,
      content: '你好!',
      next:2,
    });
  }

  componentDidUpdate () {
    var view = this.refs.view;
    view.scrollTop = view.scrollHeight;

    const speeches = this.props.speeches;
    const lastSpeech = speeches[speeches.length-1];
    const { replySpeech } = this.props.actions;
    replySpeech(lastSpeech);
  }

  render() {
    return (
      <div className="view" ref="view">
        {_.map(this.props.speeches, speech => 
          <Record key={speech.id} speech={speech}/>
        )}
      </div>
    )
  }
}


export default TalkFlow;