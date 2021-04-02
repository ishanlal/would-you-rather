import React, {Component} from 'react'
//import {connect} from 'react-redux'

class LeaderCard extends Component {
  render () {
    const { user } = this.props

    if (user === null) {
        return <p>This user doesn't exist</p>
    }

    const { id, name, avatarURL, answers, questions } = user

    return (
      <div className='user'>
        <img
          src={avatarURL}
          alt={`Avatar of ${name}`}
          className='avatar'
         />
        <div className='user-info'>
          <span>{name}</span>
          <div>Answered Questions: {answers}</div>
          <div>Created Questions: {questions}</div>
        </div>
      </div>
    )
  }
}

export default LeaderCard;
