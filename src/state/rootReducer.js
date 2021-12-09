import { combineReducers } from 'redux'
import onboarding from './Onboarding/onboardingReducer'
import user from './User/userReducer'
import scheduleConnection from './ScheduleConnection/scheduleConnectionReducer'
import integrations from './Integrations/integrationReducers'
import userProfile from './UserProfile/userProfileReducers'
import connection from './Connections/connectionReducers'
import home from './Home/homeReducers'

const rootReducer = combineReducers({ onboarding, user, scheduleConnection, integrations, userProfile, connection, home })

export default rootReducer
