import {
  GET_SCHEDULE_SETTINGS_FAILURE,
  GET_SCHEDULE_SETTINGS_REQUEST,
  GET_SCHEDULE_SETTINGS_SUCCESS,
  POST_SCHEDULE_SETTINGS_FAILURE,
  POST_SCHEDULE_SETTINGS_REQUEST,
  POST_SCHEDULE_SETTINGS_SUCCESS,
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

export const postScheduleSettingsRequest = {
  type: POST_SCHEDULE_SETTINGS_REQUEST,
}

export const postScheduleSettingsFailure = {
  type: POST_SCHEDULE_SETTINGS_FAILURE,
}

export const postScheduleSettingsSuccess = (payload) => ({
  type: POST_SCHEDULE_SETTINGS_SUCCESS,
  payload,
})
