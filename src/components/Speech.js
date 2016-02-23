import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Speech extends Component {
  render() {
    const speech = this.props.speech;

    return (
      <div className={classnames({speech: true, 'speech-reply': speech.reply})} >
        <p>{speech.content}</p>
      </div>
    )
  }
}


export default Speech;