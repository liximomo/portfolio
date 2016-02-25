import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Window from '../components/Window'
import * as SpeechActions from '../actions/speeches'


// function mapStateToProps(state) {
//   return {
//     todos: state.todos
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SpeechActions, dispatch)
  }
}

export default connect(
  state => state,
  mapDispatchToProps
)(Window)
