import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion'
import Homepage from './Homepage'
import LoginPage from './LoginPage'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
        <LoadingBar />
        <Nav />
        {this.props.loading === true
          ? null
          : <div>
              <Route path='/' exact component={Homepage} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/login' component={LoginPage} />
            </div>
        }
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect()(App) // connecting joins a component to the store then we can dispatch actions
