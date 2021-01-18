import React from 'react'
import { PrimaryButton } from "../components/UIkit"
import { useAuth0 } from "@auth0/auth0-react"
import {validation} from "../config"
import ErrorPage from '../components/ErrorPage/ErrorPage'



const Login = () => {
  const {loginWithRedirect} = useAuth0()
  const localStorageEmail = window.localStorage.getItem("user")

  if (localStorageEmail === validation) {
    return (
      <div className="center">
        <PrimaryButton
          label={"Googleアカウントでログイン"}
          onClick={() => loginWithRedirect()}
        />
      </div>
    )
  } else {
    return <ErrorPage/>
  }  
}

export default Login
