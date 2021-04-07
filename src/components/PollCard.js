import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleSaveQuestionAnswer} from '../actions/questions'
import { Link, withRouter } from 'react-router-dom'

class PollCard extends Component {
  state = {
    radioButtonState: true,
    value: ''
  }
  handleChange = (e) => {
    this.setState(() => ({
      radioButtonState: false,
      value: e.target.value
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const answer = this.state.value
    const {dispatch, questionData} = this.props
    const qid = questionData.id
    dispatch(handleSaveQuestionAnswer({qid, answer}))
    //console.log('saveQuestionAnswer data: ', ({qid, answer}))
    this.setState(() => ({
      radioButtonState: true,
      value: ''
    }))
  }
  render () {

    const { usersData, questionData } = this.props

    return (
      <div className='center'>
        <h5>Asked  by {questionData.author}</h5>
        <img
          src={usersData[questionData.author].avatarURL}
          alt={`Avatar of ${usersData[questionData.author].name}`}
          className='avatar'
         />
        <h6>Would you rather...</h6>
        <div>
            <input type='radio' id={questionData.optionOne.text} name="poll" value='optionOne' onChange={this.handleChange} />
            <label for={questionData.optionOne.text}>{questionData.optionOne.text}</label>
        </div>
        <div>
          <input type='radio' id={questionData.optionTwo.text} name="poll" value='optionTwo' onChange={this.handleChange} />
          <label for={questionData.optionTwo.text}>{questionData.optionTwo.text}</label>
        </div>
        <button
          className='btn'
          type='submit'
          disabled={this.state.radioButtonState}
          onClick={this.handleSubmit}
        >
          Submit
        </button>
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

export default withRouter(connect(mapStateToProps)(PollCard))
