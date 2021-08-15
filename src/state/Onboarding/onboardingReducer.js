import {
  GET_REPOS_FAILURE,
  GET_REPOS_REQUEST,
  GET_REPOS_SUCCESS,
  GET_USER_DATA_FAILURE,
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  ONBOARDING_PROGRESS_STATE,
  SEARCH_REPOS_FAILURE,
  SEARCH_REPOS_REQUEST,
  SEARCH_REPOS_SUCCESS,
  SET_ONBOARDING_PREFERENCE,
} from './onboardingTypes'
import { combineObject } from '../helpers'

export const onboardingInitialState = {
  repoLoading: false,
  repoError: false,
  repoData: [],
  progressState: 0,
  onboardingPreference: {},
  userDataLoading: false,
  userDataError: false,
  userData: {},
}

const onboardingReducer = (state = onboardingInitialState, action) => {
  switch (action.type) {
    case GET_REPOS_REQUEST:
      return combineObject(state, { repoLoading: true })

    case GET_REPOS_SUCCESS:
      return combineObject(state, { repoData: action.payload, repoError: false, repoLoading: false })

    case GET_REPOS_FAILURE:
      return combineObject(state, { repoError: true, repoLoading: false })

    case ONBOARDING_PROGRESS_STATE:
      return combineObject(state, { progressState: action.payload })

    case SET_ONBOARDING_PREFERENCE:
      return combineObject(state, { onboardingPreference: { ...state.onboardingPreference, ...action.payload } })

    case GET_USER_DATA_REQUEST:
      return combineObject(state, { userDataLoading: true })

    case GET_USER_DATA_SUCCESS:
      return combineObject(state, { userData: action.payload, userDataError: false, userDataLoading: false })

    case GET_USER_DATA_FAILURE:
      return combineObject(state, { userDataError: true, userDataLoading: false })

    case SEARCH_REPOS_REQUEST:
      return combineObject(state, { repoLoading: true })

    case SEARCH_REPOS_SUCCESS:
      return combineObject(state, { repoData: action.payload, repoError: false, repoLoading: false })

    case SEARCH_REPOS_FAILURE:
      return combineObject(state, { repoError: true, repoLoading: false })

    default:
      return state
  }
}

export default onboardingReducer
