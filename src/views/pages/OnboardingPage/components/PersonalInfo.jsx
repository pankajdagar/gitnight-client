import React from 'react'
import { useFormik } from 'formik'
import validationHandler from 'utils/validationHandler'
import { useDispatch, useSelector } from 'react-redux'
import { setOnboardingPreference, setOnboardingProgressState } from 'state/Onboarding/onboardingActions'
import { SocialArray } from '../../../../utils/constants'
import { postOnboardingData } from '../../../../api/onboardingHandlers'
import { useHistory } from 'react-router-dom'

const PersonalInfo = () => {
  const dispatch = useDispatch()
  const { progressState, userData, onboardingPreference } = useSelector((state) => state.onboarding)
  const history = useHistory()
  const formik = useFormik({
    initialValues: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      introduction: userData.introduction,
      linkedIn: userData.linkedIn,
      twitter: userData.twitter,
      instagram: userData.instagram,
      website: userData.website,
      sideProject1: '',
      sideProject2: '',
      country: 'India'
    },
    // validationSchema: validationHandler().onboarding,
    onSubmit: (val) => {
      console.log(val)
      const postData = {
        prefferedRepos: onboardingPreference.repoIds,
        firstName: val.firstName,
        lastName: val.lastName,
        introduction: val.introduction,
        // sideProjects: [val.sideProject1,val.sideProject2],
        tags: onboardingPreference.tags.filter(({ isSelected }) => !!isSelected).map(({ tagName }) => tagName),
        twitter: val.twitter,
        linkedin: val.linkedIn,
        // instagram: val.instagram,
        website: val.website,
        role: 'Full stack developer',
        company: '@Hashedin',
        country: val.country,
        languages: onboardingPreference.languages
          .filter(({ isSelected }) => !!isSelected)
          .map(({ languageName }) => languageName),
      }
      const sideProjects = [val.sideProject1,val.sideProject2].filter(item => item)
      if(sideProjects.length) postData['sideProjects'] = sideProjects

      try {
        postOnboardingData(postData)
        history.replace('/dashboard/home')
      } catch (e) {
        console.error(e)
      }
    },
  })

  const handleBack = () => {
    dispatch(setOnboardingProgressState(progressState - 1))
  }

  return (
    <>
      <div className="pb-5">
        <h3 className="text-2xl leading-6 font-medium text-black">
          We just need to <span className="text-blue-500">confirm</span> a few things.
        </h3>
        <p className="mt-12 mb-4 max-w-4xl text-lg text-black font-semibold">Personal Information</p>
        <p className="max-w-4xl text-xs text-black font-light">
          Your basic information will be shown in your matches every week.{' '}
        </p>
        <p className="max-w-4xl text-xs text-black font-light">Tell us what you‘d like yo show!</p>
      </div>
      <form onSubmit={formik.handleSubmit} className="w-full h-full">
        <div className="space-y-8">
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  gnight.com/
                </span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  disabled
                  className="flex-1 border-gray-300 bg-gray-50 text-gray-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm"
                  value={userData.username}
                />
              </div>
            </div>
          </div>
          <div className="py-1">
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    {...formik.getFieldProps('firstName')}
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    {...formik.getFieldProps('lastName')}
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country / Region
                </label>
                <div className="mt-1">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    {...formik.getFieldProps('country')}
                  >
                    <option>India</option>
                    <option>United States</option>
                    <option>Canada</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-6 mt-6">
            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
              About
            </label>
            <div className="mt-1">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                {...formik.getFieldProps('introduction')}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
          </div>
          <div className="py-4 bg-white sm:py-4">
            <p className="mb-4 max-w-4xl text-lg text-black font-semibold">Social Links</p>
            <div className="grid grid-cols-6 gap-6">
              {SocialArray.map((platform) => (
                <div className="col-span-6 sm:col-span-3" key={platform.dataTag}>
                  <label htmlFor={platform.dataTag} className="block text-sm font-medium text-gray-700">
                    {platform.name}
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    {!!platform.prefix && (
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                        {platform.prefix}
                      </span>
                    )}
                    <input
                      type="text"
                      name={platform.dataTag}
                      id={platform.dataTag}
                      className={`flex-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm ${
                        !platform.prefix ? 'rounded-l-md' : ''
                      }`}
                      {...formik.getFieldProps(platform.dataTag)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-4 bg-white sm:py-4">
            <p className="mb-4 max-w-4xl text-lg text-black font-semibold">Side Projects</p>
            <div className="grid grid-cols-6 gap-6">
              {[1, 2].map((project) => (
                <div className="col-span-6 sm:col-span-3" key={project}>
                  <label htmlFor={`sideProject${project}}`} className="block text-sm font-medium text-gray-700">
                    {`Side Project ${project}`}
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name={`sideProject${project}`}
                      id={project}
                      className="flex-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm"
                      {...formik.getFieldProps(`sideProject${project}`)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="flex">
            <button
              type="button"
              className="py-2 px-4 border border-gray-500 rounded-md lg:w-1/5 xl:w-1/6 w-full shadow-sm text-sm font-medium bg-gray-500 text-gray-50 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={handleBack}
            >
              Back
            </button>
            <button
              type="submit"
              className="lg:w-2/5 xl:w-1/4 w-full ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              Dashboard
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default PersonalInfo
