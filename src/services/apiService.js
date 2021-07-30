import Cookies from 'universal-cookie'
import { queryString } from '../utils/helper'
const cookies = new Cookies()

const RequestBuilder = (BaseUrl, options, interceptor) => {
  const API_URL = BaseUrl || ''
  const this_options = options || {}
  const this_interceptor = interceptor || ((request) => request.json())

  const makeRequest = async (endpoint, options) => {
    const [error, response] = await fetch(endpoint, options)
      .then(async (response) => [null, await this_interceptor(response)])
      .catch((error) => [error, null])

    return [error, response]
  }

  return {
    get: async (url, params, options = {}) => {
      const endpoint = `${API_URL}${url}${params ? `?${queryString(params)}` : ''}`,
        method = 'GET'
      return makeRequest(endpoint, { method, ...options, headers: this_options.headers(method, url) })
    },

    post: async (url, data, params, options = {}) => {
      const endpoint = `${API_URL}${url}${params ? `?${queryString(params)}` : ''}`,
        method = 'POST'

      return makeRequest(endpoint, {
        method,
        headers: this_options.headers(method, url),
        ...(data && { body: JSON.stringify(data), ...options }),
      })
    },

    put: async (url, data, params, options = {}) => {
      const endpoint = `${API_URL}${url}${params ? `?${queryString(params)}` : ''}`,
        method = 'PUT'

      return makeRequest(endpoint, {
        method,
        headers: this_options.headers(method, url),
        ...(data && { body: JSON.stringify(data), ...options }),
      })
    },

    delete: async (url, data, params, options = {}) => {
      const endpoint = `${API_URL}${url}${params ? `?${queryString(params)}` : ''}`,
        method = 'DELETE'

      return makeRequest(endpoint, {
        method,
        headers: this_options.headers(method, url),
        ...(data && { body: JSON.stringify(data), ...options }),
      })
    },

    customGet: async (url) => {
      const endpoint = url,
        method = 'GET'
      return makeRequest(endpoint, { method })
    },
  }
}

const intercept = async (request) => {
  const { status } = request
  switch (true) {
    case status === 419:
      throw new Error((await request.json()).message)
    case status === 400:
      throw new Error((await request.json()).message)
    case status === 401:
      throw new Error((await request.json()).message)
    case status === 404:
      throw new Error((await request.json()).message || 'Not found')
    case status === 500:
      throw new Error('Something went wrong')
    case status === 204:
      return { status: 'OK' }
    default:
      return request.json()
  }
}

const JWTHeaders = () => {
  const authorizationToken = cookies.get('token')
  return {
    'content-type': 'application/json',
    X_DEVICE_ID: 'Web',
    Authorization: authorizationToken ? `Bearer ${authorizationToken}` : null,
  }
}

export const authRequest = RequestBuilder(process.env.REACT_APP_API_URL, { headers: JWTHeaders }, intercept)
