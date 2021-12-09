import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useDispatch } from 'react-redux'
import { getAllConnectionsData } from '../../../api/allConnectionsHandlers'
import MonthCard from './components/MonthCard'
import './homepage.css'

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllConnectionsData())
  }, [dispatch])
  return (
    <div className="flex space-x-4">
      <div className="bg-white dark:bg-card-color-dark p-6 w-2/6 min-h-full">
        <Calendar onClickDay={(val) => dispatch(getAllConnectionsData({ date: dayjs(val).format('YYYY-MM-DD') }))} />
      </div>
      <div className="w-4/6 space-y-12">
        <MonthCard />
      </div>
    </div>
  )
}

export default HomePage
