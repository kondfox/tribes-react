import { SET_ERROR, CLEAR_ERROR } from './errorActionTypes'

export const setErrorAction = message => ({ type: SET_ERROR, message })

export const clearErrorAction = () => ({ type: CLEAR_ERROR })
