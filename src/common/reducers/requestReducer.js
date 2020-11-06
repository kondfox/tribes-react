import { REQ_PENDING, REQ_END } from '../actions/requestActionTypes'

const init = {
  pending: false,
}

export const requestReducer = (state = init, action) => {
  switch (action.type) {
    case REQ_PENDING:
      return { ...state, pending: true }
    case REQ_END:
      return { ...state, pending: false }
    default:
      return state
  }
}
