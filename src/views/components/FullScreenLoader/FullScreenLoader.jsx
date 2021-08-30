import React from 'react'
import './styles.css'

const FullScreenLoader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default FullScreenLoader
