import React from 'react'
import { Route, Switch } from "react-router"
import { Calendar, Login } from "./templates"


const Router = () => {
  return (
    
    <Switch>
      <Route exact path={"(/)?"} component={Calendar} />
      <Route exact path={"/login"} component={Login} />
    </Switch>
    
    
  )
}

export default Router