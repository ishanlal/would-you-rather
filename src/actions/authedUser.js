import {showLoading, hideLoading} from 'react-redux-loading'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function handleLogout () {
  return (dispatch, getState) => {
    dispatch(setAuthedUser(null))
  }
}

export function handleLogin (id) {
  return (dispatch, getState) => {
    dispatch(setAuthedUser(id))
  }
}
