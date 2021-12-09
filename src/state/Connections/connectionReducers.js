import { combineObject } from '../helpers'
import { GET_USER_PROFILE_FAILURE, GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_SUCCESS } from './connectionTypes'

export const connectionInitialState = {
  profileData: {},
  loading: false,
  error: false,
}

const connectionReducer = (state = connectionInitialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_REQUEST:
      return combineObject(state, { loading: true, error: false, profileData: {} })

    case GET_USER_PROFILE_SUCCESS:
      return combineObject(state, { profileData: action.payload })

    case GET_USER_PROFILE_FAILURE:
      return combineObject(state, { loading: false, error: true, profileData: {} })

    default:
      return state
  }
}

export default connectionReducer
