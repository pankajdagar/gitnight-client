import React, { useCallback, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory, useLocation } from 'react-router-dom'
import { authRequest } from '../../../services/apiService'
import FullScreenLoader from '../../components/FullScreenLoader/FullScreenLoader'

const VerifyLogin = () => {
  const location = useLocation()
  const history = useHistory()
  const [, setCookie] = useCookies(['token'])

  const verifyToken = useCallback(async (code, identifier) => {
    const landingUrl = localStorage.getItem('landingUrl')
    const [error, response] = await authRequest.post('/auth/verify', { code, identifier })
    if (!error && response) {
      setCookie('token', code, { path: '/', maxAge: 172800 })
      if (landingUrl?.length && landingUrl !== '/dashboard') {
        history.replace(`${landingUrl}`)
      } else {
        history.replace('/dashboard')
      }
    } else {
      history.replace('/')
    }
  },[history, setCookie])

  useEffect(() => {
    const query = new URLSearchParams(location.search)
    const code = query?.get('code')
    const identifier = query.get('identifier')
    verifyToken(code, identifier)
  }, [location, verifyToken])

  

  return <FullScreenLoader />
}

export default VerifyLogin
