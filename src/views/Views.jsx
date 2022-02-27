import React, { useEffect } from 'react'
import { Switch, Redirect, Route, useHistory } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import VerifyLoginPage from './pages/VerifyLoginPage/VerifyLoginPage'
import Router from './layout/router'
import { useCookies } from 'react-cookie'

const AuthRoute = ({ component: Component, ...rest }) => {
  const [cookies] = useCookies(['token'])
  const history = useHistory()
  useEffect(() => {
    if (cookies.hasOwnProperty('token') && cookies.token.length) {
      history.replace('/')
    }
  }, [cookies, history])
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />
      }}
    />
  )
}

const Views = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/dashboard" />} />
      <AuthRoute path="/login" component={LoginPage} exact />
      <AuthRoute path="/verify" component={VerifyLoginPage} exact />
      <Route path="/dashboard" component={Router} />
    </Switch>
  )
}

export default Views
