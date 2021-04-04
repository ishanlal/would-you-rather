import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import {handleLogout} from '../actions/authedUser'
import LoginPage from './LoginPage'

class Nav extends Component {
  handleLogoutButton = (e) => {
    e.preventDefault()
    const { dispatch, authedUser } = this.props
    dispatch(handleLogout())
  }
  render() {
  const { usersData, authedUser } = this.props
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        <li>
            {authedUser && (
              <div>
                Hello <br /> {authedUser}
              </div>
            )}
        </li>
        <li>
          <img
            src={usersData[authedUser].avatarURL}
            alt={`Avatar of ${usersData[authedUser].name}`}
            className='avatar'
            height='20em'
            width='50em'
           />
        </li>
        <li>
          <button onClick={this.handleLogoutButton}>
            LOGOUT
          </button>
        </li>
      </ul>
    </nav>
  )
}
}

function mapStateToProps({users, authedUser}) {
  return {
    usersData: users,
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Nav) // connecting joins a component to the store then we can dispatch actions
