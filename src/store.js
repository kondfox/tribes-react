import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from './auth/userReducer'
import { errorReducer } from './common/reducers/errorReducer'
import { requestReducer } from './common/reducers/requestReducer'

const rootReducer = (state = {}, action) => ({
  error: errorReducer(state.error, action),
  request: requestReducer(state.request, action),
  user: userReducer(state.user, action),
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
