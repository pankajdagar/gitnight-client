import React, { useEffect } from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import { useCookies } from 'react-cookie'
import FullScreenLoader from '../components/FullScreenLoader/FullScreenLoader'
import { authRequest } from '../../services/apiService'
import { useDispatch } from 'react-redux'
import { setUserData } from '../../state/User/userActions'
import OnboardingPage from '../pages/OnboardingPage/'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [cookies] = useCookies(['token'])
  return (
    <Route
      {...rest}
      render={(props) => {
        return !cookies.hasOwnProperty('token') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }}
    ></Route>
  )
}

const Router = () => {
  const [cookies] = useCookies(['token'])
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    if (cookies.hasOwnProperty('token') && cookies?.token.length) {
      getUserDetails()
    }
  }, [])

  const getUserDetails = async () => {
    const [error, response] = await authRequest.get('/user/me')
    if (!error && response) {
      dispatch(setUserData(response.data))
      if (!response?.data?.onboardingComplete) history.replace('/dashboard/welcome')
      else if (history.location.pathname === '/dashboard') history.replace('/dashboard/home')
    }
  }
  return (
    <Switch>
      <ProtectedRoute path="/dashboard" component={FullScreenLoader} exact />
      <ProtectedRoute path="/dashboard/home" component={HomePage} exact />
      <ProtectedRoute path="/dashboard/welcome" component={OnboardingPage} exact />
      <ProtectedRoute path="/dashboard/hi" component={HomePage} exact />
    </Switch>
  )
}

export default Router
