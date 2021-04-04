import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      const {question} = action
      return {
        ...state,
        [action.question.id]: action.question
      }
    case SAVE_QUESTION_ANSWER:
      const {ques} = action
      return {
        ...state,
        [action.question.id]: {
          ...state[action.question.id],
          [action.answer]: {
            ...state[action.question.id][action.answer],
            votes: state[action.question.id][action.answer].votes.concat([action.authedUser])
          }
        }
      }
    default:
      return state
  }
}
