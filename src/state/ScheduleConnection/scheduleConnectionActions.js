import {
  GET_SCHEDULE_SETTINGS_FAILURE,
  GET_SCHEDULE_SETTINGS_REQUEST,
  GET_SCHEDULE_SETTINGS_SUCCESS,
  SET_SCHEDULE_SETTINGS,
} from './scheduleConnectionTypes'

export const getScheduleSettingsRequest = {
  type: GET_SCHEDULE_SETTINGS_REQUEST,
}

export const getScheduleSettingsFailure = {
  type: GET_SCHEDULE_SETTINGS_FAILURE,
}

export const getScheduleSettingsSuccess = (payload) => ({
  type: GET_SCHEDULE_SETTINGS_SUCCESS,
  payload,
})

export const setScheduleSettings = (payload) => ({
  type: SET_SCHEDULE_SETTINGS,
  payload,
})
