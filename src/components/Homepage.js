import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Homepage extends Component {
  render () {

    const { allUsers, allQuestions } = this.props

//allQuestions[id].optionOne.text

    return (
      <div>
        <h1>Unanswered Questions</h1>
          <ul className='user-list'>
            {this.props.UnansQuesArray.map((item) => (
              <li key={item.id}>
                <div className='center'>
                  <h5>Asked  by {allQuestions[item.id].author}</h5>
                  <img
                    src={allUsers[allQuestions[item.id].author].avatarURL}
                    alt={`Avatar of ${allUsers[allQuestions[item.id].author].name}`}
                    className='avatar'
                   />
                  <h6>Would you rather...</h6>
                  <p>{allQuestions[item.id].optionOne.text}</p>
                  <Link to={{
                   pathname: `/questions/${item.id}`,
                   state: { answered: false }
                  }}>
                  <button
                    className='btn'
                    type='submit'
                  >
                    View Poll
                  </button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        <h1>Answered Questions</h1>
          <ul className='user-list'>
          {this.props.AnsQuesArray.map((item) => (
            <li key={item.id}>
              <div className='center'>
                <h5>Asked  by {allQuestions[item.id].author}</h5>
                <img
                  src={allUsers[allQuestions[item.id].author].avatarURL}
                  alt={`Avatar of ${allUsers[allQuestions[item.id].author].name}`}
                  className='avatar'
                 />
                <h6>Would you rather...</h6>
                <p>{allQuestions[item.id].optionOne.text}</p>
                <Link to={{
                 pathname: `/questions/${item.id}`,
                 state: { answered: true }
                }}>
                <button
                  className='btn'
                  type='submit'
                >
                  View Poll
                </button>
                </Link>
              </div>
            </li>
          ))}
          </ul>
      </div>
    )
  }
}

function mapStateToProps ({users, questions, authedUser}) {
  let allqids = Object.keys(questions)
  let qids = Object.keys(users[authedUser]['answers'])
  let aqArray = qids.map((item) => {return questions[item]})
  let uaqids = allqids.filter((item)=> {
        return !(qids.includes(item))
    });
  let uaqArray = uaqids.map((item) => {return questions[item]})

  return {
    UnansQuesArray: uaqArray,
    AnsQuesArray: aqArray,
    allUsers: users,
    allQuestions: questions
  }
}

export default withRouter(connect(mapStateToProps)(Homepage))
