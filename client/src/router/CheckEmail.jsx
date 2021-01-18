import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import { Calendar } from "../templates"
import ErrorPage from '../components/ErrorPage/ErrorPage'
import {VALIDATION_EMAIL} from "../config.js"

const CheckEmail = () => {
  const { user } = useAuth0()
  const userEmail = user.email
  const emailDomain = userEmail.split("@")[1]
  const varidation = VALIDATION_EMAIL
  localStorage.setItem("user",emailDomain)
  if (emailDomain === varidation) {
    return <Calendar/>
  } else {
    return <ErrorPage/>
  }
}

export default CheckEmail
