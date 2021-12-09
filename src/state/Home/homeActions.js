import { GET_ALL_CONNECTIONS_FAILURE, GET_ALL_CONNECTIONS_REQUEST, GET_ALL_CONNECTIONS_SUCCESS } from './homeTypes'

export const getAllConnectionsDataRequest = {
  type: GET_ALL_CONNECTIONS_REQUEST,
}

export const getAllConnectionsDataSuccess = (payload) => ({
  type: GET_ALL_CONNECTIONS_SUCCESS,
  payload,
})

export const getAllConnectionsDataFailure = {
  type: GET_ALL_CONNECTIONS_FAILURE,
}
