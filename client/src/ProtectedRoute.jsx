import React from 'react'
import { useAuth0 ,withAuthenticationRequired } from "@auth0/auth0-react";
import { Route } from "react-router-dom";


const ProtectedRoute = ({ component, ...args }) => {
  const { isAuthenticated } = useAuth0()
  
  return (
    
    <Route component={withAuthenticationRequired(component, {})} {...args} />
  )
}

export default ProtectedRoute
