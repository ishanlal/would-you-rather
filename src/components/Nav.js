import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import {handleLogout} from '../actions/authedUser'

class Nav extends Component {
  handleLogout = (e) => {
    e.preventDefault()

    const { authedUser } = this.props

    dispatch(handleLogout({
      authedUser
    }))
    this.props.history.push('/login')
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
          {/*<NavLink to='/login' activeClassName='active'>
            LOGOUT
          </NavLink>
          */}
          <Link to={'/login'} className='login-logout'>
          <button onClick={this.handleLogout}>
            LOGOUT
          </button>
          </Link>
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

export default withRouter(connect(mapStateToProps)(Nav)) // connecting joins a component to the store then we can dispatch actions
