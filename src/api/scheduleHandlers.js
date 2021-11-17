import {
  getScheduleSettingsFailure,
  getScheduleSettingsRequest,
  getScheduleSettingsSuccess,
} from 'state/ScheduleConnection/scheduleConnectionActions'
import { authRequest } from 'services/apiService'
import { postScheduleSettingsSuccess } from '../state/ScheduleConnection/scheduleConnectionActions'

export const getScheduleSettings = () => async (dispatch) => {
  dispatch(getScheduleSettingsRequest)
  const [error, response] = await authRequest.get('/user/settings')
  if (error || !response?.data) {
    dispatch(getScheduleSettingsFailure)
    return Promise.reject(error)
  } else {
    dispatch(getScheduleSettingsSuccess(response.data))
    return Promise.resolve(response)
  }
}

export const postScheduleSettings = (data) => async (dispatch) => {
  const [error, response] = await authRequest.post('/user/settings', data)
  if (error) {
    return Promise.reject(error)
  } else {
    dispatch(postScheduleSettingsSuccess(true))
    return Promise.resolve(response)
  }
}