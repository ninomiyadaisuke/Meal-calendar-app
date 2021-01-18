import React from 'react'
import { PrimaryButton } from "../components/UIkit"
import { useAuth0 } from "@auth0/auth0-react"
import {validation} from "../config.js"
import ErrorPage from '../components/ErrorPage/ErrorPage'

const Calendar = () => {
  const { logout, user } = useAuth0()
  const userEmail = user.email
  const emailDomain = userEmail.split("@")[1]
  localStorage.setItem("user", emailDomain)  
  
  const sessionLogout = () => {
    localStorage.removeItem("user")
    logout()
  }
  if (emailDomain === validation) {
    return (
      <>
        <div>
          <p>{user.email}</p>
          <img src={user.picture} />
          <h1>カレンダーページです</h1>
        </div>
        <PrimaryButton
          label={"ログアウト"}
          onClick={() => sessionLogout()}
        />
      </>
    )
  } else {
    return <ErrorPage/>
  }
}

export default Calendar
