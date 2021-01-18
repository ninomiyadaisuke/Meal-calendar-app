import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import { PrimaryButton } from "../UIkit"

const ErrorPage = () => {
  const { logout } = useAuth0()
  return (
    <div>
      <h1>メールアドレスが正しくありません。申し訳ありませんが最初からやり直してください</h1>
      <PrimaryButton
        label={"ログアウト"}
          onClick={() => logout()}
      />       
    </div>
  )
}

export default ErrorPage
