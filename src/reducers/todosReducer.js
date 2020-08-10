import { GET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../actions/types'

const initialState = {
    todos: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(
                    todo => todo.id !== action.payload
                )
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: replaceIndex(state.todos, action.payload)
            }
        default:
            return state
    }
}

function replaceIndex(todoList, newTodo) {
    todoList.splice(todoList.findIndex(todo => todo.id === newTodo.id), 1, newTodo)
    return todoList
}