import React, { useEffect, useContext, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import Spinner from "../components/Spinner/Spinner"

const LoginRedirect = () => {
  const { setUser } = useContext(UserContext)
  const [setHasError] = useState(null)
  const location = useLocation()
  const history = useHistory()
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/auth/google/callback${location.search}`
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`)
        }
        return res
      })
      .then((res) => res.json())
      .then((res) => {
        setUser(res)
        localStorage.setItem(
          "user",
          JSON.stringify({ jwt: res.jwt, username: res.user.username })
        )
        setTimeout(() => history.push("/"), 2000)
      })
      .catch((err) => {
        setHasError(err)
      })
  }, [history, location.search, setUser, setHasError])

  return <Spinner />
}

export default LoginRedirect
