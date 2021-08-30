import { SET_USER_DATA } from './userTypes'

export const setUserData = (payload: any) => ({
  type: SET_USER_DATA,
  payload,
})
