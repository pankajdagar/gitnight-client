import {
  getScheduleSettingsFailure,
  getScheduleSettingsRequest,
  getScheduleSettingsSuccess,
} from 'state/ScheduleConnection/scheduleConnectionActions'
import { authRequest } from 'services/apiService'

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
