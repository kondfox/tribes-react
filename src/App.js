import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './auth/pages/Login'
import Registration from './auth/pages/Registration'
import HistoryListener from './HistoryListener'
import { clearErrorAction } from './common/actions/errorActions'
import './App.scss'

function App({ clearErrorAction }) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <HistoryListener onChange={clearErrorAction}>
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
          </HistoryListener>
        </Switch>
      </Router>
    </div>
  )
}

export default connect(null, { clearErrorAction })(App)
