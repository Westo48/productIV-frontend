import axios from 'axios'
import { createMessage, returnErrors } from './messagesAction'
import { DELETE_NOTE, GET_NOTE, UPDATE_NOTE } from './types'
import { tokenConfig } from './authAction'


const notesUrl = "http://127.0.0.1:8000/api/notes/"

// Get individual note
export const getNote = (id) => (dispatch, getState) => {
    axios.get(`${notesUrl}${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_NOTE,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(
            err.response.data, err.response.status)))
}

// Delete note
export const deleteNote = (id) => (dispatch, getState) => {
    axios.delete(`${notesUrl}${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({
                deleteNote: "Note Deleted"
            }))
            dispatch({
                type: DELETE_NOTE,
                payload: id
            })
        }).catch(err => dispatch(returnErrors(
            err.response.data, err.response.status)))
}

// Update note
export const updateNote = (id, note) => (dispatch, getState) => {
    axios.put(`${notesUrl}${id}/`, note, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({
                deleteNote: "Note Updated"
            }))
            dispatch({
                type: UPDATE_NOTE,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(
            err.response.data, err.response.status)))
}