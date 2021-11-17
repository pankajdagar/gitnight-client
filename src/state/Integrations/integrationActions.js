import {
  GET_INTEGRATIONS_FAILURE,
  GET_INTEGRATIONS_REQUEST,
  GET_INTEGRATIONS_SUCCESS,
  POST_INTEGRATIONS_FAILURE,
  POST_INTEGRATIONS_REQUEST,
  POST_INTEGRATIONS_SUCCESS,
} from './integrationTypes'

export const getIntegrationsRequest = {
  type: GET_INTEGRATIONS_REQUEST,
}

export const getIntegrationsFailure = {
  type: GET_INTEGRATIONS_FAILURE,
}

export const getIntegrationsSuccess = (payload) => ({
  type: GET_INTEGRATIONS_SUCCESS,
  payload,
})

export const postIntegrationsRequest = {
  type: POST_INTEGRATIONS_REQUEST,
}

export const postIntegrationsFailure = {
  type: POST_INTEGRATIONS_FAILURE,
}

export const postIntegrationsSuccess = (payload) => ({
  type: POST_INTEGRATIONS_SUCCESS,
  payload,
})
