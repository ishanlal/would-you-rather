import React, {Component} from 'react'
import {connect} from 'react-redux'

class LoginPage extends Component {
  render () {
    return (
      <div>
        Please Login
      </div>
    )
  }
}

export default connect()(LoginPage)
