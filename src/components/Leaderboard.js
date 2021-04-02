import React, {Component} from 'react'
import { connect } from 'react-redux'
import LeaderCard from './LeaderCard'

class Leaderboard extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h3 className='center'>Leaderboard</h3>
        <ul className='user-list'>
        {
          this.props.userObject.map((item) => (
            <li key={item.id}>
              <LeaderCard users={item} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({users}) {
  return {
    userObject: Object.values(users),
  }
}

export default connect(mapStateToProps)(Leaderboard)
