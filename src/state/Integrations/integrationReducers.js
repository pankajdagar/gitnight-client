import { combineObject } from '../helpers'
import {
  GET_INTEGRATIONS_FAILURE,
  GET_INTEGRATIONS_REQUEST,
  GET_INTEGRATIONS_SUCCESS,
  POST_INTEGRATIONS_SUCCESS,
} from './integrationTypes'

export const integrationsInitialState = {
  integrationsLoading: false,
  integrationsError: false,
  integrationsData: [],
}

const integrationsReducer = (state = integrationsInitialState, action) => {
  switch (action.type) {
    case GET_INTEGRATIONS_REQUEST:
      return combineObject(state, { integrationsLoading: true })

    case GET_INTEGRATIONS_FAILURE:
      return combineObject(state, { integrationsError: true, integrationsLoading: false })

    case GET_INTEGRATIONS_SUCCESS:
      return combineObject(state, { integrationsData: action.payload })

    case POST_INTEGRATIONS_SUCCESS:
      return combineObject(state, { integrationsSuccess: action.payload })

    default:
      return state
  }
}

export default integrationsReducer
