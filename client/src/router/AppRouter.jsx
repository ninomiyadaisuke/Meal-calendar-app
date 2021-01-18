import React from 'react'
import { BrowserRouter as Router, Switch,Route } from "react-router-dom"
import { Calendar, Login } from "../templates"
import CalendarTest from '../templates/CalendarTest'
import ProtectedRoute from "./ProtectedRoute"


const appRouter = () => {
  return (
    <Router>
      <Switch>
          <Route exact path={"(/)?"} component={CalendarTest} />
      </Switch>

      {/* 本番環境のルートです 消さないでください*/}
        {/* <Switch>
          <ProtectedRoute exact path={"(/)?"} component={Calendar} />
          <ProtectedRoute exact path={"/login"} component={Login} />
      </Switch>     */}
    </Router>
  )
}

export default appRouter