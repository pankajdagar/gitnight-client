import { GET_USER_PROFILE_FAILURE, GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_SUCCESS } from "./userProfileTypes";

export const getUserProfileRequest = {
  type: GET_USER_PROFILE_REQUEST,
}

export const getUserProfileSuccess = (payload) => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload,
})

export const getUserProfileFailure = {
  type: GET_USER_PROFILE_FAILURE,
}
