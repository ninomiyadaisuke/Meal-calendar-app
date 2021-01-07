import React from 'react'
import { Route, Switch } from "react-router"
import { Calendar } from "./templates"


const Router = () => {
  return (
    
      <Switch>
        <Route exact path={"(/)?"} component={Calendar} />
      </Switch>
    
    
  )
}

export default Router