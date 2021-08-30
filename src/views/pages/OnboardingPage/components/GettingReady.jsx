import React, { useEffect } from 'react'
import { ReactComponent as LogoDark } from 'icons/LogoDark.svg'
import { useHistory } from 'react-router'

const GettingReady = () => {
  const history = useHistory()
  useEffect(() => {
    let timer = setTimeout(() => history.replace('/dashboard/schedule'),5000);
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-50 flex-col space-y-8">
      <LogoDark className="h-16 w-40" />
      <div className="flex py-20 px-12 items-center justify-center bg-white flex-col space-y-6 rounded-3xl w-72">
        <img src={`${window.location.origin}/assets/gif/pizza.gif`} alt="gif" width={90} height={95}/>
        <p className="text-sm font-bold">PROCESSING....</p>
        <p className="text-xs font-medium">Please wait while we set things up for you</p>
      </div>
    </div>
  )
}

export default GettingReady
