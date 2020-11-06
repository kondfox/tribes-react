import { REQ_PENDING, REQ_END } from './requestActionTypes'
import { setErrorAction, clearErrorAction } from './errorActions'
import { isSuccess } from '../services/fetchService'

const pendingRequest = () => ({ type: REQ_PENDING })
const endRequest = () => ({ type: REQ_END })

export const requestAction = (req, onSuccess, redirect) => async dispatch => {
  dispatch(pendingRequest())
  const res = await req()
  if (isSuccess(res)) {
    dispatch(onSuccess(res))
    dispatch(clearErrorAction())
    dispatch(endRequest())
    redirect()
  } else {
    dispatch(endRequest())
    dispatch(setErrorAction(res.message || 'error'))
  }
  return isSuccess(res)
}
