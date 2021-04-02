import React, {Component} from 'react'
//import {connect} from 'react-redux'

class LeaderCard extends Component {
  render () {
    const { user } = this.props

    if (user === null) {
        return <p>This user doesn't exist</p>
    }

    const { id, name, avatar, ans_ques, create_ques } = user

    return (
      <div className='user'>
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
         />
        <div className='user-info'>
          <span>{name}</span>
          <div>Answered Questions: {ans_ques}</div>
          <div>Created Questions: {create_ques}</div>
        </div>
      </div>
    )
  }
}

export default LeaderCard;
