import { SET_ERROR, CLEAR_ERROR } from '../actions/errorActionTypes'

const init = {
  message: null,
}

export const errorReducer = (state = init, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, message: action.message }
    case CLEAR_ERROR:
      return { ...state, message: null }
    default:
      return state
  }
}
