import { authRequest } from 'services/apiService'
import {
  getIntegrationsFailure,
  getIntegrationsRequest,
  getIntegrationsSuccess,
} from '../state/Integrations/integrationActions'

export const createUserIntegration = async (data) => {
  const [error, response] = await authRequest.post('/user/integrations', data)
  if (error) {
    return Promise.reject(error)
  } else {
    return Promise.resolve(response)
  }
}

export const getUserIntegration = (data) => async (dispatch) => {
  dispatch(getIntegrationsRequest)
  const [error, response] = await authRequest.get('/user/integrations', data)
  if (error || !response?.data) {
    dispatch(getIntegrationsFailure)
    return Promise.reject(error)
  } else {
    dispatch(getIntegrationsSuccess(response.data))
    return Promise.resolve(response.data)
  }
}
