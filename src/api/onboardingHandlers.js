import {
  getRepoDataFailure,
  getRepoDataRequest,
  getRepoDataSuccess,
  getUserDataFailure,
  getUserDataRequest,
  getUserDataSuccess,
  searchRepoDataFailure,
  searchRepoDataRequest,
  searchRepoDataSuccess,
  setOnboardingPreference,
} from '../state/Onboarding/onboardingActions'
import { authRequest } from 'services/apiService'

export const getRepoData = () => async (dispatch) => {
  dispatch(getRepoDataRequest)
  const [error, response] = await authRequest.get('/onboarding/repos')
  if (error || !response?.data) {
    dispatch(getRepoDataFailure)
    return Promise.reject(error)
  } else {
    const languages = response.data.languages.map((language) => ({ languageName: language, isSelected: false }))
    const languageData = {
      languages: languages,
    }
    dispatch(getRepoDataSuccess(response.data.repos))
    dispatch(setOnboardingPreference(languageData))
    return Promise.resolve(response)
  }
}

export const getUserData = () => async (dispatch) => {
  dispatch(getUserDataRequest)
  const [error, response] = await authRequest.get('/onboarding/user')
  if (error || !response?.data) {
    dispatch(getUserDataFailure)
    return Promise.reject(error)
  } else {
    const userData = response.data
    const tagsData =
      response.data.tags.length && response.data.tags.map((tags) => ({ tagName: tags, isSelected: false }))
    const onboardingPreference = { tags: tagsData }
    dispatch(setOnboardingPreference(onboardingPreference))
    dispatch(getUserDataSuccess(userData))
    return Promise.resolve(response)
  }
}

export const searchRepo = (query) => async (dispatch) => {
  dispatch(searchRepoDataRequest)
  const [error, response] = await authRequest.get('/user/repos/search',query)
  if (error || !response?.data) {
    dispatch(searchRepoDataFailure)
    return Promise.reject(error)
  } else {
    dispatch(searchRepoDataSuccess(response.data))
    return Promise.resolve(response)
  }
}

export const postOnboardingData = async (data) => {
  const [error, response] = await authRequest.post('/onboarding', data)
  if (error) {
    return Promise.reject(error)
  } else {
    return Promise.resolve(response)
  }
}
