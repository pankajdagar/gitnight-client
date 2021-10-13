import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import MonthCard from'./components/MonthCard'

const HomePage = () => {
  return (
    <div className="flex space-x-4">
      <div className="bg-white dark:bg-card-color-dark p-6 w-2/6 min-h-full">
        <Calendar />

      </div>
      <div className="w-4/6 space-y-12">
        <MonthCard />
        <MonthCard />
        <MonthCard />
      </div>
    </div>
  )
}

export default HomePage
