import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
import {formatQuestion} from '../utils/helpers'
import {Redirect} from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }
  handleChange = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const {optionOneText, optionTwoText} = this.state
    const {dispatch, authedUser} = this.props

    dispatch(handleAddQuestion({optionOneText, optionTwoText}))
    console.log('submit data: ', ({optionOneText, optionTwoText}))
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true
    }))
  }
  render () {
    const {optionOneText, optionTwoText, toHome} = this.state
    if (toHome === true) {
      return <Redirect to='/' />
    }
    let optionOneLeft = 280-optionOneText.length
    let optionTwoLeft = 280-optionTwoText.length

    return (
      <div className='center'>
        <h3 className='center'>Create New Question</h3>
        <h5 className='center'>Complete the question:</h5>
        <h6 className='center'>Would you rather...</h6>
        <form className='new-question'>
          <textarea
            placeholder='option 1 text here'
            value={optionOneText}
            name='optionOneText'
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
          />
          {optionOneLeft <= 100 && (
            <div className='question-length'>
            {optionOneLeft}
            </div>
          )}
        </form>
        <p className='center'>OR</p>
        <form className='new-question'>
          <textarea
            placeholder='option 2 text here'
            value={optionTwoText}
            name='optionTwoText'
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
          />
          {optionTwoLeft <= 100 && (
            <div className='question-length'>
            {optionTwoLeft}
            </div>
          )}
        </form>
        <button
          className='btn'
          type='submit'
          disabled={optionOneText === '' || optionTwoText === ''}
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    )
  }
}

export default connect()(NewQuestion)
