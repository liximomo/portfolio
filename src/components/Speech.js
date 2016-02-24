import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Speech extends Component {
  render() {
    const { content, reply } = this.props;

    return (
      <p className={classnames({speech: true, 'speech-left': reply})} >
        {content}
      </p>
    )
  }
}


export default Speech;