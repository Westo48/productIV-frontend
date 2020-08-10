import { GET_NOTE, DELETE_NOTE, UPDATE_NOTE } from '../actions/types'

const initialState = {
    note: {},
    willRedirect: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NOTE:
            return {
                ...state,
                note: action.payload,
                willRedirect: false,
            }
        case DELETE_NOTE:
            return {
                ...state,
                willRedirect: true
            }
        case UPDATE_NOTE:
            return {
                ...state,
                willRedirect: true
            }
        default:
            return state
    }
}