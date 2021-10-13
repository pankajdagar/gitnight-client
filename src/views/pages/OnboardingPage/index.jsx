import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRepoData } from '../../../api/onboardingHandlers'
import GithubInfo from './components/GithubInfo'
import Integrations from './components/Integrations'
import LanguageInfo from './components/LanguageInfo'
import PersonalInfo from './components/PersonalInfo'
import TagsInfo from './components/TagsInfo'
import { ReactComponent as LogoDark } from 'icons/LogoDark.svg'
import GettingReady from './components/GettingReady'

const OnboardingPage = () => {
  const { progressState } = useSelector((state) => state.onboarding)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRepoData())
  }, [dispatch])
  return (
    <div className="min-h-screen bg-white flex overflow-y-hidden">
      {progressState < 5 ? (
        <>
          <div className="flex-1 h-screen overflow-y-auto">
            <div className="pt-5 pl-5 text-xl">
              <LogoDark className="h-16 w-40" />
            </div>
            <div className="flex flex-col py-4 lg:py-24 px-8 sm:px-32 lg:flex-none lg:pl-20 lg:pr-44 xl:px-32 w-full">
              {progressState === 0 && <TagsInfo />}
              {progressState === 1 && <GithubInfo />}
              {progressState === 2 && <LanguageInfo />}
              {progressState === 3 && <PersonalInfo />}
              {progressState === 4 && <Integrations isOnboarding={true} />}
            </div>
          </div>
          <div className="hidden lg:block relative w-3/12">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={`${window.location.origin}/assets/images/onboarding_banner_2.jpg`}
              alt="users"
            />
          </div>
        </>
      ) : (
        <GettingReady />
      )}
    </div>
  )
}

export default OnboardingPage
