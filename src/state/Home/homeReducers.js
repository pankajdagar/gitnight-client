import { combineObject } from '../helpers'
import {
  GET_ALL_CONNECTIONS_FAILURE,
  GET_ALL_CONNECTIONS_REQUEST,
  GET_ALL_CONNECTIONS_SUCCESS,
} from './homeTypes'

export const homeInitialState = {
  allConnectionsData: [],
  loading: false,
  error: false,
}

const homeReducer = (state = homeInitialState, action) => {
  switch (action.type) {
    case GET_ALL_CONNECTIONS_REQUEST:
      return combineObject(state, { loading: true })

    case GET_ALL_CONNECTIONS_SUCCESS:
      return combineObject(state, { allConnectionsData: action.payload, error: false, loading: false })

    case GET_ALL_CONNECTIONS_FAILURE:
      return combineObject(state, { error: true, loading: false })

    default:
      return state
  }
}

export default homeReducer
