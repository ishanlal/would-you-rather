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
import PollResults from './PollResults'
import PollPage from './PollPage'
import QuestionDisplay from './QuestionDisplay'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
        <LoadingBar />
        {this.props.loading === true
          ? <Route component={LoginPage} />
          : <div>
              <Nav />
              <Route path='/' exact component={Homepage} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/questions/:qid' component={QuestionDisplay} />
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

export default connect(mapStateToProps)(App) // connecting joins a component to the store then we can dispatch actions
