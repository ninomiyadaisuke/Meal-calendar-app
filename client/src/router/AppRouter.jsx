import React from 'react'
import { BrowserRouter as Router, Switch,Route } from "react-router-dom"
import { Calendar, Login } from "../templates"
import CheckEmail from "../router/CheckEmail"
import ProtectedRoute from "./ProtectedRoute"


const appRouter = () => {
  return (
    <Router>
      <Switch>
          <ProtectedRoute exact path={"(/)?"} component={CheckEmail} />
          <ProtectedRoute exact path={"/login"} component={Login} />
          <ProtectedRoute exact path={"/calendar"} component={Calendar} />
      </Switch>
    </Router>
  )
}

export default appRouter