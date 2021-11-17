import React from 'react'
import Profile from '../UserProfile/components/Profile'
import MatchList from './components/MatchList'


const Connections = () => {
  return (
    <>
      <div className="flex-1 relative z-0 flex overflow-hidden">
        <Profile isProfilePage={false}/>
        <MatchList />
      </div>
    </>
  )
}

export default Connections
