import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOnboardingPreference, setOnboardingProgressState } from '../../../../state/Onboarding/onboardingActions'
import Tags from '../../../components/Tags/Tags'
import Select from 'components/Select/Select'
import { allLanguages } from 'utils/constants'

const LanguageInfo = () => {
  const dispatch = useDispatch()
  const { onboardingPreference, progressState } = useSelector((state) => state.onboarding)
  const [nextDisabled, setNextDisabled] = useState(true)

  const handleNext = () => {
    dispatch(setOnboardingProgressState(progressState + 1))
  }

  const handleBack = () => {
    dispatch(setOnboardingProgressState(progressState - 1))
  }

  const handleTagClick = (index) => {
    let languageArray = onboardingPreference?.languages?.slice(0) || []
    languageArray[index].isSelected = !languageArray[index].isSelected
    dispatch(setOnboardingPreference({ languages: languageArray }))
    handleNextDisabled(languageArray)
  }

  const handleLanguageSelect = (languageInfo) => {
    let languageArray = onboardingPreference?.languages?.slice(0) || []
    languageArray.push(languageInfo)
    dispatch(setOnboardingPreference({ languages: languageArray }))
    handleNextDisabled(languageArray)
  }

  const handleNextDisabled = (languageArray) => {
    const selectedLanguage = languageArray.filter(({isSelected}) => !!isSelected)
    if(selectedLanguage.length >= 5) {
      setNextDisabled(false)
    } else {
      setNextDisabled(true)
    }
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
          {!!onboardingPreference?.languages?.length ? (
            onboardingPreference?.languages.map(({ languageName, isSelected }, index) => (
              <Tags key={index} index={index} text={languageName} onTagClick={handleTagClick} isSelected={isSelected} />
            ))
          ) : (
            <div className="text-center">No Languages Added</div>
          )}
        </div>
      </div>
      <div className="mt-1 flex gap-3 p-1">
        <Select data={allLanguages} onSelect={handleLanguageSelect} />
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
          disabled={nextDisabled}
          className={`inline-flex items-center justify-center lg:w-3/5 xl:w-2/4 w-full mt-20 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${nextDisabled ? 'bg-gray-400 hover:bg-gray-500' : `bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`} `}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default LanguageInfo
