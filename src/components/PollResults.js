import React, {Component} from 'react'
import ResultsCard from './ResultsCard'
import {connect} from 'react-redux'

class PollResults extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>PollResults</h3>
        <ul className='user-list'>
        {this.props.ques.map((item) => (
          <li key={item.id}>
            <ResultsCard id={item.id} />
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

export default connect(mapStateToProps)(PollResults)
