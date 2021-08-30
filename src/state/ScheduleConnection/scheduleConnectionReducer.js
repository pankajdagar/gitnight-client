import { combineObject } from '../helpers'
import {
  GET_SCHEDULE_SETTINGS_FAILURE,
  GET_SCHEDULE_SETTINGS_REQUEST,
  GET_SCHEDULE_SETTINGS_SUCCESS,
  SET_SCHEDULE_SETTINGS,
} from './scheduleConnectionTypes'

export const scheduleConnectionInitialState = {
  scheduleConnectionLoading: false,
  scheduleConnectionError: false,
  scheduleConnectionData: {},
}

const scheduleConnectionReducer = (state = scheduleConnectionInitialState, action) => {
  switch (action.type) {
    case GET_SCHEDULE_SETTINGS_REQUEST:
      return combineObject(state, { scheduleConnectionLoading: true })

    case GET_SCHEDULE_SETTINGS_FAILURE:
      return combineObject(state, { scheduleConnectionError: true, scheduleConnectionLoading: false })

    case GET_SCHEDULE_SETTINGS_SUCCESS:
      return combineObject(state, { scheduleConnectionData: action.payload })

    case SET_SCHEDULE_SETTINGS:
      return combineObject(state, { scheduleConnectionData: { ...state.scheduleConnectionData, ...action.payload } })

    default:
      return state
  }
}

export default scheduleConnectionReducer
