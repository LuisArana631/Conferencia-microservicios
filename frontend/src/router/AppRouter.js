import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Login } from '../Login'
import { Mascotas } from '../Mascotas'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Mascotas} />
        </Switch>
      </div>
    </Router>
  )
}