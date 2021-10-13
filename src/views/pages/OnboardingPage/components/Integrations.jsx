import React from 'react'
import { ReactComponent as IconGoogle } from 'icons/IconGoogle.svg'
import { ReactComponent as IconSlack } from 'icons/IconSlack.svg'
import { ReactComponent as IconZoom } from 'icons/IconZoom.svg'
import { ReactComponent as IconStripe } from 'icons/IconStripe.svg'
import SocialIntegrationCard from '../../../components/SocialIntegrationCard/SocialIntegrationCard'
import GoogleSignIn from './GoogleSignIn'
import { useDispatch, useSelector } from 'react-redux'
import { setOnboardingProgressState } from '../../../../state/Onboarding/onboardingActions'

const platforms = [
  {
    name: 'Slack',
    icon: IconSlack,
    iconWidth: 10,
    description: 'Connect slack for smooth meeting schedule and hangout calls.',
    isAvailable: false,
  },
  {
    name: 'Zoom',
    icon: IconZoom,
    iconWidth: 10,
    description: 'Connect google for smooth meeting schedule and hangout calls.',
    isAvailable: false,
  },
  {
    name: 'Stripe',
    icon: IconStripe,
    iconWidth: 20,
    description: 'Connect google for smooth meeting schedule and hangout calls.',
    isAvailable: false,
  },
  {
    name: 'Google 4',
    icon: IconGoogle,
    iconWidth: 10,
    description: 'Connect google for smooth meeting schedule and hangout calls.',
    isAvailable: false,
  },
  {
    name: 'Google 5',
    icon: IconGoogle,
    iconWidth: 10,
    description: 'Connect google for smooth meeting schedule and hangout calls.',
    isAvailable: false,
  },
]

const Integrations = ({ isOnboarding = false }) => {
  const dispatch = useDispatch()
  const { progressState } = useSelector((state) => state.onboarding)
  const handleDashboardRedirect = () => {
    dispatch(setOnboardingProgressState(progressState + 1))
  }

  return (
    <>
      {!!isOnboarding && (
        <div className="pb-5">
          <h3 className="text-2xl leading-6 font-medium text-black">
            Seamless connections to your <span className="text-blue-500">favorite</span> notifications, video calls &
            payment apps.
          </h3>
        </div>
      )}
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-4">
        <GoogleSignIn />
        {platforms.map((platform) => (
          <SocialIntegrationCard platform={platform} key={platform.name} />
        ))}
      </ul>
      {!!isOnboarding && (
        <div className="py-14">
          <button
            className="lg:w-3/5 xl:w-2/4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            onClick={handleDashboardRedirect}
          >
            Dashboard
          </button>
        </div>
      )}
    </>
  )
}

export default Integrations
