import React from 'react'
import { PrimaryButton } from "../components/UIkit"
// import { useAuth0 } from "@auth0/auth0-react"

const Login = () => {
  // const {loginWithRedirect} = useAuth0

  return (
    <div className="center">
        <PrimaryButton
          label={"Login"}
          // onClick={() => loginWithRedirect()}
        />
    </div>
  )
}

export default Login
