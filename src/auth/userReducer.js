import * as userAction from './userActionTypes'

const initState = {
  user: null,
  token: null,
}

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userAction.LOGIN_SUCCESS:
      return { ...state, token: action.token }
    case userAction.REGISTER_SUCCESS:
      return state
    default:
      return state
  }
}
