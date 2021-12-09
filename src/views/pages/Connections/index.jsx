import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllConnectionsData } from '../../../api/allConnectionsHandlers'
import Profile from '../UserProfile/components/Profile'
import MatchList from './components/MatchList'

const Connections = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllConnectionsData())
  }, [dispatch])
  return (
    <>
      <div className="flex-1 relative z-0 flex overflow-hidden">
        <Profile isProfilePage={false} />
        <MatchList />
      </div>
    </>
  )
}

export default Connections
