import { combineReducers } from 'redux'
import onboarding from './Onboarding/onboardingReducer'
import user from './User/userReducer'
import scheduleConnection from './ScheduleConnection/scheduleConnectionReducer'

const rootReducer = combineReducers({ onboarding, user, scheduleConnection })

export default rootReducer
