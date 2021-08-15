import React from 'react'
import { PlusIcon } from '@heroicons/react/outline'
import { ReactComponent as IconGoogle } from 'icons/IconGoogle.svg'
import { ReactComponent as IconSlack } from 'icons/IconSlack.svg'
import { ReactComponent as IconZoom } from 'icons/IconZoom.svg'
import { ReactComponent as IconStripe } from 'icons/IconStripe.svg'
import SocialIntegrationCard from '../../../components/SocialIntegrationCard/SocialIntegrationCard'
import GoogleSignIn from './GoogleSignIn'

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

const Integrations = () => {
  return (
    <>
      <div className="pb-5">
        <h3 className="text-2xl leading-6 font-medium text-black">
          Seamless connections to your <span className="text-blue-500">favorite</span> notifications, video calls &
          payment apps.
        </h3>
      </div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-4">
      <GoogleSignIn />
        {platforms.map((platform) => (
          <SocialIntegrationCard platform={platform}/>
        ))}
      </ul>
    </>
  )
}

export default Integrations
