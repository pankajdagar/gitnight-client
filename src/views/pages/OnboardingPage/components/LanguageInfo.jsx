import { PlusIcon } from '@heroicons/react/solid'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOnboardingPreference, setOnboardingProgressState } from '../../../../state/Onboarding/onboardingActions'
import Tags from '../../../components/Tags/Tags'

const LanguageInfo = () => {
  const dispatch = useDispatch()
  const { onboardingPreference, progressState, data } = useSelector((state) => state.onboarding)
  const [tagInputVal, setTagInputVal] = useState('')

  useEffect(() => {
    dispatch(setOnboardingPreference({ ...onboardingPreference, languages: data?.languages }))
  }, [])

  const handleEnterOnInput = (e) => {
    let tagArray = onboardingPreference?.tags?.slice(0) || []
    if (e.key === 'Enter') {
      tagArray.push(e.target.value)
      dispatch(setOnboardingPreference({ ...onboardingPreference, tags: tagArray }))
      setTagInputVal('')
    }
  }

  const handleNext = () => {
    dispatch(setOnboardingProgressState(progressState + 1))
  }

  const handleBack = () => {
    dispatch(setOnboardingProgressState(progressState - 1))
  }

  const handleTagClick = (index) => {
    let languageArray = onboardingPreference?.languages.slice(0) || []
    languageArray[index].isSelected = !languageArray[index].isSelected
    dispatch(setOnboardingPreference({ ...onboardingPreference, languages: languageArray }))
  }

  return (
    <>
      <div className="pb-5">
        <h3 className="text-2xl leading-6 font-medium text-black">
          Tell us what <span className="text-blue-500">programming langauge</span> you are interested in.
        </h3>
        <h3 className="text-2xl leading-6 font-medium text-black">
          We’ll help you find right developer to discuss on.
        </h3>
        <p className="mt-12 mb-4 max-w-4xl text-sm text-black font-semibold">Select languages</p>
        <p className="max-w-4xl text-xs text-black font-light">Select min 5 languages that best descripbe your skill</p>
        <p className="max-w-4xl text-xs text-black font-light">We’ll customise your matches based on what you select</p>
      </div>
      <div className="bg-white my-8 w-4/5 lg:w-4/5">
        <div className="px-4 py-5 sm:p-6 flex flex-wrap items-center">
          {!!data?.languages?.length ? (
            data?.languages.map(({ languageName, isSelected }, index) => (
              <Tags key={index} index={index} text={languageName} onTagClick={handleTagClick} isSelected={isSelected} />
            ))
          ) : (
            <div className="text-center">No Languages Added</div>
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
          placeholder="Add your own language"
          // onKeyUp={handleEnterOnInput}
          // onChange={(e) => setTagInputVal(e.target.value)}
          // value={tagInputVal}
        />
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          // onClick={handleAddTag}
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Add
        </button>
      </div>
      <div>
        <button
          type="button"
          className="inline-flex items-center justify-center mr-5 lg:w-1/5 xl:w-1/6 w-full mt-10 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center lg:w-2/5 xl:w-1/4 w-full mt-10 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default LanguageInfo
