import React from 'react'
import { BrowserRouter as Router, Switch,Route } from "react-router-dom"
import { Calendar, Login,UserList,BuyList } from "../templates"
import CalendarTest from '../templates/CalendarTest'
import ProtectedRoute from "./ProtectedRoute"

const AppliRouter = () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path={"/login"} component={Login} />
        <Route exact path={"(/)?"} component={CalendarTest} /> 
        <Route exact path={"(/user)"} component={UserList} />
        <Route exact path={"/buylist"} component={BuyList} />
      </Switch>

        {/* 本番用ルートです */}
        {/* <Switch>
          <ProtectedRoute exact path={"(/)?"} component={Calendar} />
          <ProtectedRoute exact path={"/login"} component={Login} />
      </Switch>     */}
    </Router>
  )
}

export default AppliRouter