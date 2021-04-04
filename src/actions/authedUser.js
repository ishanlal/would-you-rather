import {showLoading, hideLoading} from 'react-redux-loading'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function handleLogout (id) {
  return (dispatch, getState) => {
    const {authedUser} = getState()
    dispatch(showLoading())
    .then((id) => dispatch(setAuthedUser(id)))
    .then(() => dispatch(hideLoading()))
  }
}
