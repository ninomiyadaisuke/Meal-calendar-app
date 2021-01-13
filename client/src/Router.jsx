import React from 'react'
import { Route, Switch } from "react-router"

import { Calendar, UserList, Login } from "./templates"

import ProtectedRoute from "./ProtectedRoute"


const Router = () => {
  return (
    

      
    <Switch>
      <ProtectedRoute exact path={"/login"} component={Login} />
      <ProtectedRoute exact path={"(/)?"} component={Calendar} />
      <Route exact path={"(/user)"} component={UserList} />
    </Switch>

    
    
  )
}

export default Router