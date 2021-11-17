import React from 'react'
import { ReactComponent as IconGoogle } from 'icons/IconGoogle.svg'
import { useSelector } from 'react-redux'

const VideoCallPreference = () => {
  const { integrationsData } = useSelector((state) => state.integrations)
  return (
    <>
      <p className="mb-4 dark:text-title-dark">🎥  Video Call</p>
      <div className="py-4 px-8 border rounded-md flex items-center space-x-5">
        <IconGoogle className="w-10 h-10" />
        <div className="font-medium text-sm dark:text-text-dark">
          <p>Google Hangout</p>
          {/* <p>Pankaj (<span className="text-blue-400">{`pnkjdagar25@gmail.com`}</span>)</p> */}
          <p><span className="text-blue-400">{integrationsData[0]?.email}</span></p>
        </div>
      </div>
    </>
  )
}

export default VideoCallPreference
