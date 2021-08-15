import {
  GET_REPOS_FAILURE,
  GET_REPOS_REQUEST,
  GET_REPOS_SUCCESS,
  GET_USER_DATA_FAILURE,
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  ONBOARDING_PROGRESS_STATE,
  SET_ONBOARDING_PREFERENCE,
} from './onboardingTypes'

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

export const getUserDataRequest = {
  type: GET_USER_DATA_REQUEST,
}

export const getUserDataFailure = {
  type: GET_USER_DATA_FAILURE,
}

export const getUserDataSuccess = (payload) => ({
  type: GET_USER_DATA_SUCCESS,
  payload,
})

export const setOnboardingProgressState = (payload) => ({
  type: ONBOARDING_PROGRESS_STATE,
  payload,
})

export const setOnboardingPreference = (payload) => ({
  type: SET_ONBOARDING_PREFERENCE,
  payload,
})

export const searchRepoDataRequest = {
  type: GET_REPOS_REQUEST,
}

export const searchRepoDataSuccess = (payload) => ({
  type: GET_REPOS_SUCCESS,
  payload,
})

export const searchRepoDataFailure = {
  type: GET_REPOS_FAILURE,
}
