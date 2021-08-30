import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOnboardingPreference, setOnboardingProgressState } from 'state/Onboarding/onboardingActions'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'
import Tags from '../../../components/Tags/Tags'
import { searchRepo } from '../../../../api/onboardingHandlers'

const GithubInfo = () => {
  const dispatch = useDispatch()
  const { repoData, progressState, onboardingPreference } = useSelector((state) => state.onboarding)
  let timer = useRef(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleNext = () => {
    dispatch(setOnboardingProgressState(progressState + 1))
  }

  const handleBack = () => {
    dispatch(setOnboardingProgressState(progressState - 1))
  }

  const handleAddOrRemoveRepo = (repo) => {
    let repos = onboardingPreference?.repos?.slice(0) || []
    let repoIds = onboardingPreference?.repoIds?.slice(0) || []
    console.log(repos,repoIds)
    if (repoIds.includes(repo.id)) {
      repos.splice(repoIds.indexOf(repo.id), 1)
      repoIds.splice(repoIds.indexOf(repo.id), 1)
    } else {
      repos.push(repo)
      repoIds.push(repo.id)
    }
    dispatch(setOnboardingPreference({ repos, repoIds }))
  }

  const handleRepoSearch = (e) => {
    if (e.target.value.length) {
      setIsSearching(true)
    } else {
      setIsSearching(false)
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      dispatch(searchRepo({ q: e.target.value }))
    }, 500)
  }

  return (
    <>
      <div className="pb-5">
        <h3 className="text-2xl leading-6 font-medium text-black">
          Select your &#127775; <span className="text-blue-500">github repos</span> which you want to show in your
          profile.
        </h3>
        <p className="mt-12 mb-4 max-w-4xl text-sm text-black font-semibold">Your github profile</p>
        <p className="max-w-4xl text-xs text-black font-light">
          Select 6 github repos, which we’ll show to your matches
        </p>
      </div>
      <div className="bg-white my-8 w-4/5 lg:w-4/5">
        <div className="px-1 py-5 sm:p-2 flex flex-wrap items-center">
          {!!onboardingPreference?.repos?.length ? (
            onboardingPreference.repos.map(({ fullName, id }) => <Tags key={id} isSelected={true} text={fullName} />)
          ) : (
            <div className="text-center">No Repos Added</div>
          )}
        </div>
      </div>
      <div className="mt-1 flex gap-3 p-1">
        <label htmlFor="email" className="sr-only">
          Search Repository
        </label>
        <input
          type="text"
          name="tags"
          id="tags"
          className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block sm:text-sm border-gray-300 rounded-md w-3/5 lg:w-2/5"
          placeholder="Search Repository"
          onChange={handleRepoSearch}
          // value={tagInputVal}
        />
      </div>
      <div className="mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          {!isSearching ? `TOP 6 REPOSITORY WITH MOST STARS 🌟` : `Search Results`}
        </h3>
        <ul className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200 lg:w-2/4">
          {!!repoData?.length &&
            repoData.map((repo) => (
              <li key={repo.id} className="py-4 flex items-center justify-between space-x-3">
                <div className="min-w-0 flex-1 flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {/* <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" /> */}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">{repo.name}</p>
                    <p className="text-sm font-medium text-gray-500 truncate">{repo.description}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="inline-flex items-center py-2 px-3 border border-transparent rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => handleAddOrRemoveRepo(repo)}
                  >
                    {!onboardingPreference?.repoIds?.includes(repo.id) ? (
                      <>
                        <PlusSmIcon className="-ml-1 mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="text-sm font-medium text-gray-900">Add</span>
                      </>
                    ) : (
                      <>
                        <MinusSmIcon className="-ml-1 mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <span className="text-sm font-medium text-gray-900">Remove</span>
                      </>
                    )}
                  </button>
                </div>
              </li>
            ))}
        </ul>
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

export default GithubInfo
