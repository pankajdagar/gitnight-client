import React, { useState } from 'react'
import { PlusIcon } from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux'
import Tags from '../../../components/Tags/Tags'
import { setScheduleSettings } from 'state/ScheduleConnection/scheduleConnectionActions'

const AskMeAbout = () => {
  const { scheduleConnectionData } = useSelector((state) => state.scheduleConnection)
  const [topicInputVal, setTopicInputVal] = useState('')
  const dispatch = useDispatch()

  const handleTagClick = (index) => {
    console.log(index)
  }

  const handleEnterOnInput = (e) => {
    let topicArray = scheduleConnectionData?.askTopics?.slice(0) || []
    if (e.key === 'Enter' && e.target.value.length) {
      topicArray.push({ topicName: e.target.value, isSelected: true })
      dispatch(setScheduleSettings({ askTopics: topicArray }))
      setTopicInputVal('')
    }
  }

  const handleAddTopic = () => {
    let topicArray = scheduleConnectionData?.askTopics?.slice(0) || []
    if (topicInputVal.length) {
      topicArray.push({ topicName: topicInputVal, isSelected: true })
      dispatch(setScheduleSettings({ askTopics: topicArray }))
      setTopicInputVal('')
    }
  }

  return (
    <>
      <p className="mb-4">🗣 Ask me about</p>
      <div className="px-2 flex flex-wrap items-center">
        {!!scheduleConnectionData?.askTopics?.length &&
          scheduleConnectionData?.askTopics?.map(({ topicName, isSelected }, index) => (
            <Tags key={index} isSelected={isSelected} text={topicName} index={index} onTagClick={handleTagClick} />
          ))}
      </div>
      <div className="mt-1 flex space-x-3 p-1 w-full">
        <input
          type="text"
          name="askTopics"
          id="tags"
          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block sm:text-sm border-gray-300 rounded-md w-full"
          placeholder="E.g. : SAAS "
          onKeyUp={handleEnterOnInput}
          onChange={(e) => setTopicInputVal(e.target.value)}
          value={topicInputVal}
        />
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={handleAddTopic}
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Add
        </button>
      </div>
    </>
  )
}

export default AskMeAbout
