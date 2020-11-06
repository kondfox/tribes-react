import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from './auth/pages/Login'
import Registration from './auth/pages/Registration'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
