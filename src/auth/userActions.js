import * as userAction from './userActionTypes'
import { requestAction } from '../common/actions/requestAction'
import { post } from '../common/services/fetchService'

const registerReq = req => () => post('/register', req)
const registerSuccess = () => ({ type: userAction.REGISTER_SUCCESS })
const registerRedirect = history => () => history.push('/login')

const loginReq = req => () => post('/login', req)
const loginSuccess = token => ({ type: userAction.LOGIN_SUCCESS, token })
const loginRedirect = history => () => history.push('/')

export const registerAction = (req, history) =>
  requestAction(registerReq(req), registerSuccess, registerRedirect(history))

export const loginAction = (req, history) =>
  requestAction(loginReq(req), loginSuccess, loginRedirect(history))
