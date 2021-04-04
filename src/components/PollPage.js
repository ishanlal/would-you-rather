import React, {Component} from 'react'
import PollCard from './PollCard'
import {connect} from 'react-redux'

class PollPage extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>PollPage</h3>
        <ul className='user-list'>
        {this.props.ques.map((item) => (
          <li key={item.id}>
            <PollCard id={item.id} />
          </li>
        ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({questions}) {
return {
  ques: Object.values(questions)
}
}

export default connect(mapStateToProps)(PollPage)
