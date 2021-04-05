import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleLogin} from '../actions/authedUser'

class LoginPage extends Component {
  state = {
    userVal: null
  }
  handleChange = (e) => {
    this.setState(() => ({
      userVal: e.target.value
    }))
  }
  handleLoginButton = (e) => {
    e.preventDefault()
    const { dispatch, authedUser } = this.props
    dispatch(handleLogin(this.state.userVal))
  }
  render () {
    return (
      <div className='center'>
        <h1>Welcome to Would You Rather App</h1>
        <h2>Sign In</h2>
        <div className='signin_input'>
            <select onChange={(e) => this.handleChange(e)}>
              <option value='please_select_an_option' disabled selected>Please select a user...</option>
              <option value='sarahedo'>Sarah Edo</option>
              <option value='tylermcginnis'>Tyler McGinnis</option>
              <option value='johndoe'>John Doe</option>
            </select>
        </div>
        <br />
        <button onClick={this.handleLoginButton}>
          Sign In
        </button>
      </div>
    )
  }
}

function mapStateToProps({users, authedUser}) {
  return {
    usersData: users,
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(LoginPage)
