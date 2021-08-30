import React from 'react'
import { PlusIcon } from '@heroicons/react/outline'
import { CheckIcon } from '@heroicons/react/solid'

const SocialIntegrationCard = ({ platform, onConnectClick }) => {
  return (
    <li key={platform.name} className={`col-span-1 bg-white rounded-lg shadow flex flex-col p-4`}>
      <div className={`flex flex-col p-4 ${!platform.isAvailable ? 'filter blur-sm' : ''}`}>
        <platform.icon className={`w-${platform.iconWidth} h-10 text-gray-400`} aria-hidden="true" />
        <h3 className="text-lg font-bold my-3">Connect {platform.name}</h3>
        <p className="text-sm">{platform.description}</p>
      </div>
      <button
        className={`flex items-center justify-center text-sm font-semibold text-white p-2 rounded-md my-3 ${
          !platform.isAvailable ? 'cursor-not-allowed bg-gray-400' : !!platform.isConnected ? 'bg-green-500' : 'bg-blue-500'
        }`}
        disabled={!platform.isAvailable}
        onClick={!platform.isConnected ? onConnectClick : null}
      >
        {!!platform.isAvailable ? (
          <>
            {!!platform.isConnected ? (
              <>
                <CheckIcon className="w-5 h-5 mr-2" aria-hidden="true" /> CONNECTED
              </>
            ) : (
              <>
                <PlusIcon className="w-5 h-5 mr-2" aria-hidden="true" /> CONNECT
              </>
            )}
          </>
        ) : (
          <>COMING SOON</>
        )}
      </button>
    </li>
  )
}

export default SocialIntegrationCard
