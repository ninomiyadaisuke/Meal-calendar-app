import React from 'react'
import { Route, Switch } from "react-router"
import { Calendar, UserList } from "./templates"


const Router = () => {
  return (
    
      <Switch>
        <Route exact path={"(/)?"} component={Calendar} />
        <Route exact path={"(/user)"} component={UserList} />
      </Switch>
    
    
  )
}

export default Router