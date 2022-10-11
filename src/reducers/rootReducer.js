import messagesReducer from './messagesReducer';
import usersReducer from './usersReducer';
import usersSessionsReducer from './usersSessionsReducer';
import {combineReducers} from 'redux';

//Combine all the sub reducers
const rootReducer = (localStorageObj) => combineReducers({
    messages: messagesReducer(localStorageObj),
    users: usersReducer(localStorageObj),
    users_sessions: usersSessionsReducer(localStorageObj),
})

export default rootReducer