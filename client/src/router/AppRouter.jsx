import React from 'react'
import { BrowserRouter as Router, Switch,Route } from "react-router-dom"
import { Calendar, Login } from "../templates"
import ProtectedRoute from "./ProtectedRoute"


const appRouter = () => {
  return (
    <Router>
      <Switch>
          <ProtectedRoute exact path={"(/)?"} component={Calendar} />
          <ProtectedRoute exact path={"/login"} component={Login} />
      </Switch>
    </Router>
  )
}

export default appRouter