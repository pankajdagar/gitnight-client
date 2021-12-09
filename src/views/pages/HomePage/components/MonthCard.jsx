import React from 'react'
import { useSelector } from 'react-redux'
import MatchCard from './MatchCard'

const MonthCard = () => {
  const { allConnectionsData } = useSelector((state) => state.home)
  return (
    <div className="bg-white dark:bg-card-color-dark flex-1 divide-y-2">
      <div className="p-4 dark:text-title-dark">April 2021</div>
      {!!allConnectionsData?.length &&
        allConnectionsData.map((connection) => {
          return <MatchCard data={connection} />
        })}
    </div>
  )
}

export default MonthCard
