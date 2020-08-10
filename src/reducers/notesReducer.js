import { GET_NOTES, ADD_NOTE, DELETE_NOTES } from '../actions/types'

const initialState = {
    notes: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                notes: action.payload
            }
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        case DELETE_NOTES:
            return {
                ...state,
                notes: state.notes.filter(
                    note => note.id !== action.payload
                )
            }
        default:
            return state
    }
}