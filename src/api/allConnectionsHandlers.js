import {
  getAllConnectionsDataSuccess,
  getAllConnectionsDataRequest,
  getAllConnectionsDataFailure,
} from 'state/Home/homeActions'
import { authRequest } from 'services/apiService'

export const getAllConnectionsData = (data) => async (dispatch) => {
  dispatch(getAllConnectionsDataRequest)
  const [error, response] = await authRequest.get('/user/connections', data)
  if (error || !response?.data) {
    dispatch(getAllConnectionsDataFailure)
    return Promise.reject(error)
  } else {
    dispatch(getAllConnectionsDataSuccess(response.data))
    return Promise.resolve(response)
  }
}
