import React, {Component} from 'react'
import LeaderCard from './LeaderCard'

class Leaderboard extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>Leaderboard</h3>
        <ul className='user-list'>
          <LeaderCard />
        </ul>
      </div>
    )
  }
}

export default Leaderboard;
