import React, {Component} from 'react'
import {connect} from 'react-redux'

class ResultsCard extends Component {
  render () {

    const { usersData, questionData } = this.props

    const optionOneVotes = questionData.optionOne.votes.length
    const optionTwoVotes = questionData.optionTwo.votes.length
    const totalVotes = questionData.optionOne.votes.length+questionData.optionTwo.votes.length

    return (
      <div className='center'>
        <h5>Asked  by {questionData.author}</h5>
        <img
          src={usersData[questionData.author].avatarURL}
          alt={`Avatar of ${usersData[questionData.author].name}`}
          className='avatar'
         />
        <h6>Results: </h6>
        <p>{questionData.optionOne.text}</p>
        <progress id='optionOne' value={optionOneVotes} max={totalVotes}></progress>
        <p>{optionOneVotes} out of {totalVotes}</p>
        <p>{questionData.optionTwo.text}</p>
        <progress id='optionTwo' value={optionTwoVotes} max={totalVotes}></progress>
        <p>{optionTwoVotes} out of {totalVotes}</p>
      </div>
    )
  }
}

function mapStateToProps ({users, questions}, {id}) {
  return {
    usersData: users,
    questionData: questions[id]
  }
}

export default connect(mapStateToProps)(ResultsCard)
