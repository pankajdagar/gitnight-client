import React, { useEffect } from 'react'
import LocationPreference from './components/LocationPreference'
import DaysPreferences from './components/DaysPreference'
import VideoCallPreference from './components/VideoCallPreference'
import AskMeAbout from './components/AskMeAbout'
import LearnPreference from './components/LearnPreference'
import { useDispatch, useSelector } from 'react-redux'
import { setScheduleSettings } from 'state/ScheduleConnection/scheduleConnectionActions'
import CustomSelect from '../HomePage/CustomSelect'
import ScheduleConnectionSuccess from './components/ScheduleConnectionSuccess'
import { getScheduleSettings, postScheduleSettings } from '../../../api/scheduleHandlers'
import { getUserIntegration } from '../../../api/integrationsHandlers'

const connectionColors = ['#F8A3A3', '#3E8ACF', '#9EAAE9', '#40D39E', '#723DE1', '#87C746']

const commData = [{ id: 1, name: 'Email' }]

const timeData = [
  { id: 10, name: '10 Minutes' },
  { id: 20, name: '20 Minutes' },
]

const ScheduleConnection = () => {
  const { scheduleConnectionData, scheduleConnectionSuccess } = useSelector((state) => state.scheduleConnection)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getScheduleSettings())
    dispatch(getUserIntegration())
  }, [dispatch])

  const handleScheduleConnection = () => {
    console.log(scheduleConnectionData)
    const postData = {
      matchPerWeek: scheduleConnectionData.matchPerWeek,
      matchDays: scheduleConnectionData.matchDays,
      notifyBeforeMinutes: scheduleConnectionData.notifyBeforeMinutes,
      connectionColor: scheduleConnectionData.connectionColor,
      askMeAbout: scheduleConnectionData?.askTopics?.map(data => data.topicName),
      learnPreference: scheduleConnectionData?.learnTopics?.map(data => data.topicName),
    }
    console.log(postData)
    dispatch(postScheduleSettings(postData))
  }

  return (
    <>
      {!scheduleConnectionSuccess ? (
        <div className="min-h-full bg-white dark:bg-card-color-dark max-w-full">
          <DaysPreferences />
          <div className="pt-4 pb-16 pl-8 pr-8 lg:pr-24">
            <h2 className="text-xl border-b pt-2 pb-4 dark:text-title-dark">Connection Details</h2>
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
              <p className="dark:text-title-dark">Connection Color</p>
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
              <p className="dark:text-title-dark">Notification</p>
              <div className="flex space-x-2 items-center">
                <CustomSelect
                  data={commData}
                  selected={commData.find((comm) => comm.id === scheduleConnectionData?.commSetting) || commData[0]}
                  onSelect={(comm) => dispatch(setScheduleSettings({ commSetting: comm.id }))}
                />
                <CustomSelect
                  data={timeData}
                  selected={timeData.find((time) => time.id === scheduleConnectionData?.notifyBeforeMinutes)}
                  onSelect={(time) => dispatch(setScheduleSettings({ notifyBeforeMinutes: time.id }))}
                />
              </div>
            </div>
            <button
              onClick={handleScheduleConnection}
              className="lg:w-2/5 xl:w-2/4 w-full mt-10 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              Let's do it
            </button>
          </div>
        </div>
      ) : (
        <ScheduleConnectionSuccess />
      )}
    </>
  )
}

export default ScheduleConnection
