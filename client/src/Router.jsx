import React from 'react'
import { Route, Switch } from "react-router"
import { Calendar } from "./templates"
import { BuyList } from "./templates"


const Router = () => {
  return (
    
      <Switch>
        <Route exact path={"(/)?"} component={Calendar} />
        <Route exact path={"/buylist"} component={BuyList} />
      </Switch>
    
    
  )
}

export default Router