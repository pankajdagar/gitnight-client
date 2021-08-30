import React from 'react'
import LocationPreference from './components/LocationPreference'
import DaysPreferences from './components/DaysPreference'
import VideoCallPreference from './components/VideoCallPreference'
import AskMeAbout from './components/AskMeAbout'
import LearnPreference from './components/LearnPreference'
import { useDispatch, useSelector } from 'react-redux'
import { setScheduleSettings } from 'state/ScheduleConnection/scheduleConnectionActions'
import CustomSelect from '../HomePage/CustomSelect'

const connectionColors = ['#F8A3A3', '#3E8ACF', '#9EAAE9', '#40D39E', '#723DE1', '#87C746']

const commData = [
  { id: 1, name: 'Email' },
  { id: 2, name: 'SMS' },
]

const timeData = [
  { id: 10, name: '10 Minutes' },
  { id: 20, name: '20 Minutes' },
]

const ScheduleConnection = () => {
  const { scheduleConnectionData } = useSelector((state) => state.scheduleConnection)
  const dispatch = useDispatch()
  return (
    <div className="min-h-full bg-white shadow-md max-w-full">
      <DaysPreferences />
      <div className="pt-4 pb-16 pl-8 pr-8 lg:pr-24">
        <h2 className="text-xl border-b pt-2 pb-4">Connection Details</h2>
        <div className="py-5 space-y-8">
          <LocationPreference />
          <VideoCallPreference />
          <AskMeAbout />
          <LearnPreference />
        </div>
        <div className="border-b text-sm pt-2 pb-2 text-gray-500">
          This is one layer on your match logic to find connection with common objective.
        </div>
        <div className="flex space-x-6 mt-10">
          <p>Connection Color</p>
          <div className="flex space-x-2 items-center">
            {connectionColors.map((color) => (
              <div
                style={{
                  borderColor: color,
                  backgroundColor: scheduleConnectionData?.connectionColor === color ? color : '',
                }}
                key={color}
                className="border-4 rounded-full h-5 w-5 cursor-pointer"
                onClick={() => dispatch(setScheduleSettings({ connectionColor: color }))}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex space-x-6 mt-10 items-center">
          <p>Notification</p>
          <div className="flex space-x-2 items-center">
            <CustomSelect
              data={commData}
              selected={scheduleConnectionData?.commSetting || commData[0]}
              onSelect={(comm) => dispatch(setScheduleSettings({ commSetting: comm }))}
            />
            <CustomSelect
              data={timeData}
              selected={scheduleConnectionData?.timeSetting || timeData[0]}
              onSelect={(time) => dispatch(setScheduleSettings({ timeSetting: time }))}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleConnection
