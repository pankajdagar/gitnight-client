import { combineObject } from "../helpers"
import { CLEAR_USER_DATA, SET_USER_DATA } from "./userTypes"


export const userInitState = {
	loading: false,
	user: {},
	error: '',
}

const userReducer = (state = userInitState, action) => {
	switch (action.type) {

		case SET_USER_DATA:
			return combineObject(state, { loading: false, user: action.payload })

		case CLEAR_USER_DATA:
			return combineObject(state, { loading: false, user: {} })

		default:
			return state
	}
}

export default userReducer
