import { combineReducers } from 'redux'
import usersReducer from './fetchData'
import counter from './counter'

const rootReducer = combineReducers({
    users:usersReducer,
    counter:counter
})

export default rootReducer