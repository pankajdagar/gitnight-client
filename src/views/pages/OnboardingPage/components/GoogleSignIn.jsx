import React, { useState } from 'react'
import { ReactComponent as IconGoogle } from 'icons/IconGoogle.svg'
import SocialIntegrationCard from 'components/SocialIntegrationCard/SocialIntegrationCard'
import { useGoogleLogin } from 'react-google-login'
import { createUserIntegration } from '../../../../api/integrationsHandlers'
import { useSelector } from 'react-redux'

const GoogleSignIn = () => {
  const [isConnected, setIsConnected] = useState(false)
  const { integrationsData } = useSelector((state) => state.integrations)
  const isGoogleIntegrated =
    integrationsData?.length && integrationsData?.find(({ integrationName }) => integrationName === 'GOOGLE')
  const onSuccess = async (res) => {
    const integrationData = [
      {
        integrationName: 'GOOGLE',
        email: res.profileObj.email,
        accessToken: 'abc',
        details: {},
      },
    ]
    try {
      await createUserIntegration(integrationData)
      setIsConnected(true)
    } catch (e) {
      console.error(e)
    }
  }

  const onFailure = (res) => {
    console.log('fail', res)
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    isSignedIn: false,
  })
console.log(integrationsData?.find(({ integrationName }) => integrationName === 'GOOGLE'))
  return (
    <>
      <SocialIntegrationCard
        platform={{
          name: 'Google',
          icon: IconGoogle,
          iconWidth: 10,
          description: 'Connect google for smooth meeting schedule and hangout calls.',
          isAvailable: true,
          isConnected: isConnected || !!isGoogleIntegrated,
        }}
        onConnectClick={signIn}
      />
    </>
  )
}

export default GoogleSignIn
