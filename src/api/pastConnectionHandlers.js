import { authRequest } from 'services/apiService'
import {
  getUserProfileFailure,
  getUserProfileRequest,
  getUserProfileSuccess,
} from '../state/Connections/connectionActions'

export const getUserProfile = (username) => async (dispatch) => {
  dispatch(getUserProfileRequest)
  const [error, response] = await authRequest.get(`/user/profile/${username}`)
  if (error || !response?.data) {
    dispatch(getUserProfileFailure)
    return Promise.reject(error)
  } else {
    dispatch(getUserProfileSuccess(response.data))
    return Promise.resolve(response)
  }
}
