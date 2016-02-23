import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import Window from '../components/Window'

class App extends Component {
  render() {
    return (
      <div >
        {this.props.children}
      </div>
    )
  }
}

render(
  <App >
    <Window />
  </App>,
  document.getElementById('root')
)