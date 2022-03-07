import React, { useCallback, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { authRequest } from '../../../services/apiService'
import FullScreenLoader from '../../components/FullScreenLoader/FullScreenLoader'

const VerifyLogin = () => {
  const location = useLocation()
  
  const verifyToken = useCallback(async (code, identifier) => {
    const [error, response] = await authRequest.post('/auth/verify', { code, identifier })
    if (!error && response) {
      console.log("login success")
      window.postMessage({ login: {
        success: true,
        token: code,
      }})
    } 
    window.close()
  },[])

  useEffect(() => {
    const query = new URLSearchParams(location.search)
    const code = query?.get('code')
    const identifier = query.get('identifier')
    verifyToken(code, identifier)
  }, [location])

  

  return <FullScreenLoader />
}

export default VerifyLogin
