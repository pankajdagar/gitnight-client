import React from 'react'
import { ReactComponent as IconGoogle } from 'icons/IconGoogle.svg'

const VideoCallPreference = () => {
  return (
    <>
      <p className="mb-4">🎥  Video Call</p>
      <div className="py-4 px-8 border rounded-md flex items-center space-x-5">
        <IconGoogle className="w-10 h-10" />
        <div className="font-medium text-sm">
          <p>Google Hangout</p>
          <p>Pankaj (<span className="text-blue-400">{`pnkjdagar25@gmail.com`}</span>)</p>
        </div>
      </div>
    </>
  )
}

export default VideoCallPreference
