import { CREATE_MESSAGE, GET_ERRORS } from './types'

// Create Message
export function createMessage(msg) {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    }
}

// Return Errors
export function returnErrors(msg, status) {
    return {
        type: GET_ERRORS,
        payload: {
            msg,
            status
        }
    }
}