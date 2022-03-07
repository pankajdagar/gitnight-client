import {
  getAllConnectionsDataSuccess,
  getAllConnectionsDataRequest,
  getAllConnectionsDataFailure,
} from 'state/Home/homeActions'
import { authRequest } from 'services/apiService'
import dayjs from 'dayjs'

export const getAllConnectionsData = (data) => async (dispatch) => {
  dispatch(getAllConnectionsDataRequest)
  if(!data) {
    data = {date: dayjs().format("YYYY-MM-DD")}
  }
  const [error, response] = await authRequest.get('/api/user/connections', data)
  if (error || !response?.data) {
    dispatch(getAllConnectionsDataFailure)
    return Promise.reject(error)
  } else {
    dispatch(getAllConnectionsDataSuccess(response.data))
    return Promise.resolve(response)
  }
}
