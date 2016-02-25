import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Speech from '../components/Speech';

class Record extends Component {
  render() {
    const speech = this.props.speech;

    return (
      <div className="record clearfix" >
        <Speech content={speech.content} user={speech.user} />
      </div>
    )
  }
}


export default Record;