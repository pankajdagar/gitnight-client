import { GET_REPOS_FAILURE, GET_REPOS_REQUEST, GET_REPOS_SUCCESS, ONBOARDING_PROGRESS_STATE, ONBOARD_USER, SET_ONBOARDING_PREFERENCE, UPDATE_LANGUAGES } from './onboardingTypes'

export const getRepoDataRequest = {
  type: GET_REPOS_REQUEST,
}

export const getRepoDataSuccess = (payload) => ({
  type: GET_REPOS_SUCCESS,
  payload,
})

export const getRepoDataFailure = {
  type: GET_REPOS_FAILURE,
}

export const setOnboardingProgressState = payload => ({
  type: ONBOARDING_PROGRESS_STATE,
  payload
})

export const setOnboardingPreference = payload => ({
  type: SET_ONBOARDING_PREFERENCE,
  payload
})

export const setAuthRequest = {
  type: ONBOARD_USER,
}