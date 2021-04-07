import React, {Component} from 'react'
import {connect} from 'react-redux'
import ResultsCard from './ResultsCard'
import PollCard from './PollCard'

class QuestionDisplay extends Component {
  render() {

    const {answered} = this.props

    return (
      <div className='center'>
        <ul className='user-list'>
        {
          !answered && (
            <li key={this.props.ques_id}>
            {console.log('qid=', this.props.ques_id)}
              <PollCard id={this.props.ques_id} />
            </li>
          )
        }
        {
          answered && (
            <li key={this.props.ques_id}>
              <ResultsCard id={this.props.ques_id} />
            </li>
          )
        }
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({users, questions, authedUser}, props) {
const {qid} = props.match.params
let ques_answered = Object.keys(users[authedUser].answers).includes(qid)

return {
  ques_id: qid,
  answered: ques_answered
}
}

export default connect(mapStateToProps)(QuestionDisplay)
