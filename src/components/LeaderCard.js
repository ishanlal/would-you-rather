import React, {Component} from 'react'
import {connect} from 'react-redux'

class LeaderCard extends Component {
  render () {
    return (
      <div>
        <ul className='user-list'>
          {
            this.props.ud.map((item) => (
            <li key={item.id}>
              <div className='user'>
                <img
                  src={item.avatarURL}
                  alt={`Avatar of ${item.name}`}
                  className='avatar'
                 />
                <div className='user-info'>
                  <span>{item.name}</span>
                  <div>Answered Questions: {Object.keys(item.answers).length}</div>
                  <div>Created Questions: {item.questions.length}</div>
                  <div>Score: {item.score}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({users}) {
  let userVal = Object.values(users)
  let userArray = userVal.map((item) => ({...item,
    ['score']: Object.keys(item.answers).length + item.questions.length}))
  userArray.sort((a, b) => (a.score < b.score) ? 1 : -1)
  console.log('fsdfsdfsdf',userArray)
  return {
    ud: userArray,
  }
}

export default connect (mapStateToProps)(LeaderCard)
