import {
  GET_REPOS_FAILURE,
  GET_REPOS_REQUEST,
  GET_REPOS_SUCCESS,
  ONBOARDING_PROGRESS_STATE,
  SET_ONBOARDING_PREFERENCE,
} from './onboardingTypes'
import { combineObject } from '../helpers'

export const authInitState = {
  loading: false,
  data: [],
  error: false,
  progressState: 0,
  onboardingPreference: {},
}

const onboardingReducer = (state = authInitState, action) => {
  switch (action.type) {
    case GET_REPOS_REQUEST:
      return combineObject(state, { loading: true })

    case GET_REPOS_SUCCESS:
      return combineObject(state, { data: action.payload, error: false, loading: false })

    case GET_REPOS_FAILURE:
      return combineObject(state, { error: true, loading: false })

    case ONBOARDING_PROGRESS_STATE:
      return combineObject(state, { progressState: action.payload })

    case SET_ONBOARDING_PREFERENCE:
      return combineObject(state, { onboardingPreference: action.payload })

    default:
      return state
  }
}

export default onboardingReducer
