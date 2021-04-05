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
        [action.question.id]: action.question,
        [action.author]: {
          ...state[action.author],
          questions: state[action.author].questions.concat([action.question.id])
        }
      }
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        [action.question.qid]: {
          ...state[action.question.qid],
          [action.question.answer]: {
            ...state[action.question.qid][action.question.answer],
            votes: state[action.question.qid][action.question.answer].votes.concat([action.question.authedUser])
          }
        },
        [action.question.authedUser]: {
          ...state[action.question.authedUser],
          answers: {
            ...state[action.question.authedUser].answers,
            [action.question.qid]: action.question.answer
          }
        }
      }
    default:
      return state
  }
}
