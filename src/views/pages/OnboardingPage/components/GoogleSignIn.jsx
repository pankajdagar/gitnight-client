import React from 'react'
import { ReactComponent as IconGoogle } from 'icons/IconGoogle.svg'
import SocialIntegrationCard from 'components/SocialIntegrationCard/SocialIntegrationCard'
import { useGoogleLogin } from 'react-google-login'

const GoogleSignIn = () => {
  const onSuccess = (res) => {
    console.log('Login',res.profileObj)
  }

  const onFailure = (res) => {
    console.log('fail',res)
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId : process.env.REACT_APP_GOOGLE_CLIENT_ID,
    isSignedIn: true,
  })

  return (
    <>
      <SocialIntegrationCard
        platform={{
          name: 'Google',
          icon: IconGoogle,
          iconWidth: 10,
          description: 'Connect google for smooth meeting schedule and hangout calls.',
          isAvailable: true,
        }}
        onConnectClick={signIn}
      />
    </>
  )
}

export default GoogleSignIn
