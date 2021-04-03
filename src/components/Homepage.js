import React, {Component} from 'react'
import {connect} from 'react-redux'

class Homepage extends Component {
  render () {
    return (
      <div>
      HOME PAGE
      </div>
    )
  }
}

export default connect()(Homepage)
