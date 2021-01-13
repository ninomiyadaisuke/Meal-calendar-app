import React from 'react'
import { PrimaryButton } from "../components/UIkit"
import { useAuth0 } from "@auth0/auth0-react"
import { push } from "connected-react-router"

const Calendar = () => {
  const { isAuthenticated, logout, user } = useAuth0()
  
  return (
    isAuthenticated && (
    <>
        <div>
          <img src={user.picture}/>
        <h1>カレンダーページです</h1>
      </div>
      <PrimaryButton
        label={"ログアウト"}
          onClick={() => logout()}
      /> 
    </>
    )
  )
}

export default Calendar
