import React, {Component} from 'react'
import {connect} from 'react-redux'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }
  handleChange = (e) => {
    const optionOneText = e.target.value_1
    const optionTwoText = e.target.value_2
    this.setState(() => ({
      optionOneText,
      optionTwoText
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {optionOneText, optionTwoText} = this.state
    // todo: add question to the store
    console.log('New Question: ', optionOneText, optionTwoText)
    this.setState(() => ({
      optionOneText: '',
      optionTwoText: ''
    }))
  }
  render () {
    const {optionOneText, optionTwoText} = this.state

    let optionOneLeft = 280-optionOneText.length
    let optionTwoLeft = 280-optionTwoText.length

    return (
      <div className='center'>
        <h3 className='center'>Create New Question</h3>
        <h5 className='center'>Complete the question:</h5>
        <h6 className='center'>Would you rather...</h6>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <textarea
            placeholder='option 1 text here'
            value_1={this.state.optionOneText}
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
        <form className='new-question' onSubmit={this.handleSubmit}>
          <textarea
            placeholder='option 2 text here'
            value_2={this.state.optionTwoText}
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
        >
          Submit
        </button>
      </div>
    )
  }
}

export default NewQuestion
