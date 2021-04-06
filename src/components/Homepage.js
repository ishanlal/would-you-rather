import React, {Component} from 'react'
import {connect} from 'react-redux'
import ResultsCard from './ResultsCard'
import PollCard from './PollCard'

class Homepage extends Component {
  render () {
    return (
      <div>
        <h1>Unanswered Questions</h1>
          <ul className='user-list'>
          {this.props.UnansQuesArray.map((item) => (
            <li key={item.id}>
              <PollCard id={item.id} />
            </li>
          ))}
          </ul>
        <h1>Answered Questions</h1>
          <ul className='user-list'>
          {this.props.AnsQuesArray.map((item) => (
            <li key={item.id}>
              <ResultsCard id={item.id} />
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
    AnsQuesArray: aqArray
  }
}

export default connect(mapStateToProps)(Homepage)
