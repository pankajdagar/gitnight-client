import { PlusIcon } from '@heroicons/react/solid'
import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { postOnboardingData } from '../../../../api/onboardingHandlers'
import { setOnboardingPreference, setOnboardingProgressState } from '../../../../state/Onboarding/onboardingActions'
import validationHandler from '../../../../utils/validationHandler'
import Tags from '../../../components/Tags/Tags'

const TagsInfo = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { onboardingPreference, progressState } = useSelector((state) => state.onboarding)
  const [tagInputVal, setTagInputVal] = useState('')
  const formik = useFormik({
    initialValues: {
      linkedIn: '',
      twitter: '',
      instagram: '',
      website: '',
    },
    // validationSchema: validationHandler().onboarding,
    onSubmit: (val) => {
      const onboardingPreferenceData = {
        ...onboardingPreference,
        ...val,
      }
      dispatch(setOnboardingPreference({ ...onboardingPreference, ...val }))
      const postData = {
        prefferedRepos: onboardingPreference.prefferedRepos,
        firstName: onboardingPreference.firstName,
        lastName: onboardingPreference.lastName,
        role: onboardingPreference.role,
        company: onboardingPreference.company,
        introduction: onboardingPreference.introduction,
        sideProjects: ['mysideproject.com'],
        tags: onboardingPreference.tags,
        twitter: onboardingPreference.twitter,
        linkedin: onboardingPreference.instagram,
        website: onboardingPreference.website,
      }
      dispatch(postOnboardingData(postData))
      history.replace('/dashboard/home')
    },
  })

  const handleEnterOnInput = (e) => {
    let tagArray = onboardingPreference?.tags?.slice(0) || []
    if (e.key === 'Enter') {
      tagArray.push({ tagName: e.target.value, isSelected: true })
      dispatch(setOnboardingPreference({ ...onboardingPreference, tags: tagArray }))
      setTagInputVal('')
    }
  }

  const handleAddTag = () => {
    let tagArray = onboardingPreference?.tags?.slice(0) || []
    tagArray.push({ tagName: tagInputVal, isSelected: true })
    dispatch(setOnboardingPreference({ ...onboardingPreference, tags: tagArray }))
    setTagInputVal('')
  }

  const handleNext = () => {
    dispatch(setOnboardingProgressState(progressState + 1))
  }

  const handleTagClick = (index) => {
    let tagArray = onboardingPreference?.tags?.slice(0)
    tagArray[index].isSelected = !tagArray[index].isSelected
    dispatch(setOnboardingPreference({ ...onboardingPreference, tags: tagArray }))
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
          Select up to 20 topics that best descripbe your Github Repos
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
        className="inline-flex items-center justify-center lg:w-3/5 xl:w-2/4 w-full mt-20 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={handleNext}
      >
        Next
      </button>
      {/* <form onSubmit={formik.handleSubmit} className="">
        <div>
          <div className="py-5 bg-white sm:py-6">
            <div className="grid grid-cols-6 gap-6">
              {SocialArray.map((platform) => (
                <div className="col-span-6 sm:col-span-3" key={platform.dataTag}>
                  <label htmlFor={platform.dataTag} className="block text-sm font-medium text-gray-700">
                    {platform.name}
                  </label>
                  <input
                    type="text"
                    name={platform.dataTag}
                    id={platform.dataTag}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    {...formik.getFieldProps(platform.dataTag)}
                  />
                  {formik.touched[platform.dataTag] && formik.errors[platform.dataTag] ? (
                    <div className="text-red-700 text-sm">{formik.errors[platform.dataTag]}</div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div className="px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Finish
            </button>
          </div>
        </div>
      </form> */}
    </>
  )
}

export default TagsInfo
