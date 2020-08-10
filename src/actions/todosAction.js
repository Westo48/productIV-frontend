import axios from 'axios'
import { createMessage, returnErrors } from './messagesAction'
import { GET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from './types'
import { tokenConfig } from './authAction'


const todosUrl = "http://127.0.0.1:8000/api/todos/"

// Get ToDo
export const getTodos = () => (dispatch, getState) => {
    axios.get(todosUrl, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_TODOS,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(
            err.response.data, err.response.status)))
}

// Add ToDo
export const addTodo = (todo) => (dispatch, getState) => {
    axios.post(todosUrl, todo, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({
                addTodo: "Todo Added"
            }))
            dispatch({
                type: ADD_TODO,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(
            err.response.data, err.response.status)))
}

// Delete ToDo
export const deleteTodo = (id) => (dispatch, getState) => {
    axios.delete(`${todosUrl}${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({
                deleteTodo: "ToDo Deleted"
            }))
            dispatch({
                type: DELETE_TODO,
                payload: id
            })
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

// Update ToDo
export const updateTodo = (id, todo) => (dispatch, getState) => {
    axios.put(`${todosUrl}${id}/`, todo, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({
                updateTodo: "ToDo Updated"
            }))
            dispatch({
                type: UPDATE_TODO,
                payload: res.data
            })
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}