import { combineReducers } from 'redux'
import onboarding from './Onboarding/onboardingReducer'
import user from './User/userReducer'

const rootReducer = combineReducers({ onboarding, user })

export default rootReducer
