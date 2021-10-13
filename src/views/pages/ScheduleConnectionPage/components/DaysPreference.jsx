import React, { useState } from 'react'
import CustomSelect from '../../HomePage/CustomSelect'
import { setScheduleSettings } from 'state/ScheduleConnection/scheduleConnectionActions'
import { useDispatch, useSelector } from 'react-redux'

const radioGroup = [
  {
    name: 'allWeek',
    text: 'All Week',
    supportText: '',
  },
  {
    name: 'weekday',
    text: 'Only Weekdays',
    supportText: '(Monday to Friday)',
  },
  {
    name: 'weekend',
    text: 'Only Weekends',
    supportText: '(Sat & Sunday)',
  },
]

const daysData = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },
]

const SetPreferences = () => {
  const [selectedDays, setSelectedDays] = useState(daysData[0])
  const { scheduleConnectionData } = useSelector((state) => state.scheduleConnection)
  const dispatch = useDispatch();

  const handleMatchPrefTypeChange = (e) => {
    dispatch(setScheduleSettings({ matchDays: e.target.name }))
  }

  return (
    <div className="min-h-full bg-white shadow-md max-w-full">
      <div className="bg-blue-50 dark:bg-card-color-dark p-16">
        <div className="sm:flex justify-between sm:space-y-0 space-y-5">
          <div>
            <h2 className="text-lg font-bold dark:text-title-dark">Number of meetings</h2>
            <p className="text-xs dark:text-text-dark">Upto 6 connections a week</p>
          </div>
          <div className="w-20">
            <CustomSelect data={daysData} selected={selectedDays} onSelect={setSelectedDays} label="Matches Per Week" />
          </div>
        </div>
        <fieldset className="sm:space-x-5 sm:space-y-0 sm:flex mt-5 space-y-5">
          {radioGroup.map(({ name, text, supportText }) => (
            <div className="relative flex items-start" key={name}>
              <div className="flex items-center h-5">
                <input
                  id={name}
                  name={name}
                  checked={scheduleConnectionData.matchDays === name}
                  type="radio"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  onChange={handleMatchPrefTypeChange}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor={name} className="font-medium text-gray-700 dark:text-title-dark">
                  {text}
                </label>
                <p id={name} className="text-gray-500 dark:text-text-dark">
                  {supportText}
                </p>
              </div>
            </div>
          ))}
        </fieldset>
      </div>
    </div>
  )
}

export default SetPreferences
