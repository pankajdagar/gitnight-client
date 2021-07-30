import { getRepoDataFailure, getRepoDataRequest, getRepoDataSuccess } from '../state/Onboarding/onboardingActions'
import { authRequest } from 'services/apiService'

export const getRepoData = () => async (dispatch) => {
  dispatch(getRepoDataRequest)
  const [error, response] = await authRequest.get('/onboarding/repos')
  if (error || !response?.data) {
    dispatch(getRepoDataFailure)
    return Promise.reject(error)
  } else {
    const languageData = response.data.languages.map((language) => ({ languageName: language, isSelected: false }))
    const modifiedData = {
      ...response.data,
      languages: languageData,
    }
    dispatch(getRepoDataSuccess(modifiedData))
    return Promise.resolve(response)
  }
}

export const getAllGHLanguages = () => async (dispatch) => {
  const [error, response] = await authRequest.customGet(
    'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json',
  )
  console.log(error, response)
}

export const postOnboardingData = (data) => async (dispatch) => {
  const [error, response] = await authRequest.post('/onboarding', data)
  if (error) {
    return Promise.reject(error)
  } else {
    return Promise.resolve(response)
  }
}
