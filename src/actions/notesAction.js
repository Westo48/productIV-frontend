import axios from 'axios'
import { createMessage, returnErrors } from './messagesAction'
import { GET_NOTES, ADD_NOTE, DELETE_NOTES } from './types'
import { tokenConfig } from './authAction'


const notesUrl = "http://127.0.0.1:8000/api/notes/"

// Get notes
export const getNotes = () => (dispatch, getState) => {
    axios.get(notesUrl, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_NOTES,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(
            err.response.data, err.response.status)))
}

// Add note
export const addNote = (note) => (dispatch, getState) => {
    axios.post(notesUrl, note, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({
                addNote: "Note Added"
            }))
            dispatch({
                type: ADD_NOTE,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(
            err.response.data, err.response.status)))
}

// Delete note
export const deleteNotes = (id) => (dispatch, getState) => {
    axios.delete(`${notesUrl}${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({
                deleteNote: "Note Deleted"
            }))
            dispatch({
                type: DELETE_NOTES,
                payload: id
            })
        }).catch(err => dispatch(returnErrors(
            err.response.data, err.response.status)))
}