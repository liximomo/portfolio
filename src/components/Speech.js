import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Speech extends Component {
  render() {
    const { content, user } = this.props;

    return (
      <p className={classnames({speech: true, 'speech-left': !user})} >
        {content}
      </p>
    )
  }
}


export default Speech;