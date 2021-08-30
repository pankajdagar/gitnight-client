import { authRequest } from 'services/apiService'

export const createUserIntegration = async (data) => {
  const [error, response] = await authRequest.post('/user/integrations', data)
  if (error) {
    return Promise.reject(error)
  } else {
    return Promise.resolve(response)
  }
}