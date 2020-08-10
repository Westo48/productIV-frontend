import { combineReducers } from 'redux'

import errorsReducer from './errorsReducer'
import messagesReducer from './messagesReducer'
import authReducer from './authReducer'
import notesReducer from './notesReducer'
import noteReducer from './noteReducer'
import todosReducer from './todosReducer'

export default combineReducers({
    errors: errorsReducer,
    messages: messagesReducer,
    auth: authReducer,
    notes: notesReducer,
    note: noteReducer,
    todos: todosReducer
})