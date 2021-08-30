import React from 'react'
import { PlusIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOnboardingPreference, setOnboardingProgressState } from '../../../../state/Onboarding/onboardingActions'
import Tags from '../../../components/Tags/Tags'

const TagsInfo = () => {
  const dispatch = useDispatch()
  const { onboardingPreference, progressState } = useSelector((state) => state.onboarding)
  const [tagInputVal, setTagInputVal] = useState('')
  const [nextDisabled, setNextDisabled] = useState(true)

  const handleEnterOnInput = (e) => {
    let tagArray = onboardingPreference?.tags?.slice(0) || []
    if (e.key === 'Enter' && e.target.value.length) {
      tagArray.push({ tagName: e.target.value, isSelected: true })
      dispatch(setOnboardingPreference({ tags: tagArray }))
      setTagInputVal('')
      handleNextDisabled(tagArray)
    }
  }

  const handleAddTag = () => {
    let tagArray = onboardingPreference?.tags?.slice(0) || []
    if (tagInputVal.length) {
      tagArray.push({ tagName: tagInputVal, isSelected: true })
      dispatch(setOnboardingPreference({ tags: tagArray }))
      setTagInputVal('')
      handleNextDisabled(tagArray)
    }
  }

  const handleNext = () => {
    dispatch(setOnboardingProgressState(progressState + 1))
  }

  const handleTagClick = (index) => {
    let tagArray = onboardingPreference?.tags?.slice(0)
    tagArray[index].isSelected = !tagArray[index].isSelected
    dispatch(setOnboardingPreference({ tags: tagArray }))
    handleNextDisabled(tagArray)
  }

  const handleNextDisabled = (tagsArray) => {
    const selectedTags = tagsArray.filter(({ isSelected }) => !!isSelected)
    if (selectedTags.length >= 5 && selectedTags.length <= 20) {
      setNextDisabled(false)
    } else {
      setNextDisabled(true)
    }
  }

  return (
    <>
      <div className="pb-5">
        <h3 className="text-2xl leading-6 font-medium text-black">
          Woohoo! you have joined <span className="text-blue-500">millions</span> of developers who are connecting &
          collaborating everyday.
        </h3>
        <p className="mt-12 mb-4 max-w-4xl text-sm text-black font-semibold">
          Tell us what are you interested in. We’ll help you get there
        </p>
        <p className="max-w-4xl text-xs text-black font-light">
          Select up to 20 topics that best describe your Github Repos
        </p>
        <p className="max-w-4xl text-xs text-black font-light">We’ll customise your matches based on what you select</p>
      </div>
      <div className="bg-white my-8 w-4/5 lg:w-4/5">
        <div className="px-4 py-5 sm:p-6 flex flex-wrap items-center">
          {!!onboardingPreference?.tags?.length ? (
            onboardingPreference.tags.map(({ tagName, isSelected }, index) => (
              <Tags key={index} isSelected={isSelected} text={tagName} index={index} onTagClick={handleTagClick} />
            ))
          ) : (
            <div className="text-center">No Topics Added</div>
          )}
        </div>
      </div>
      <div className="mt-1 flex gap-3 p-1">
        <label htmlFor="email" className="sr-only">
          Topic
        </label>
        <input
          type="text"
          name="tags"
          id="tags"
          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block sm:text-sm border-gray-300 rounded-md w-3/5 lg:w-2/5"
          placeholder="Add your own topic"
          onKeyUp={handleEnterOnInput}
          onChange={(e) => setTagInputVal(e.target.value)}
          value={tagInputVal}
        />
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={handleAddTag}
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Add
        </button>
      </div>
      <button
        type="button"
        disabled={nextDisabled}
        className={`inline-flex items-center justify-center lg:w-3/5 xl:w-2/4 w-full mt-20 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${nextDisabled ? 'bg-gray-400 hover:bg-gray-500' : `bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`} `}
        onClick={handleNext}
      >
        Next
      </button>
    </>
  )
}

export default TagsInfo
