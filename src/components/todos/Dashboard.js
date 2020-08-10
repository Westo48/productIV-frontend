import React, { Fragment } from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

export default function Dashboard() {
    return (
        <Fragment>
            <h1 className="display-4">ToDos</h1>
            <ToDoForm />
            <ToDoList />
        </Fragment>
    )
}
