import React from 'react'
import MatchCard from './MatchCard'

const MonthCard = () => {
  return (
    <div className="bg-white dark:bg-card-color-dark flex-1 divide-y-2">
      <div className="p-4 dark:text-title-dark">
        April 2021
      </div>
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
    </div>
  )
}

export default MonthCard
