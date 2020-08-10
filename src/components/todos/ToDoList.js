import React, { Component, Fragment } from 'react'
import { } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTodos, deleteTodo } from '../../actions/todosAction'

import ToDo from './ToDo'


export class ToDoList extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        getTodos: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getTodos()
    }

    render() {
        return (
            <Fragment>
                <hr />
                <div className="row">
                    {this.props.todos.map(todo => (
                        <ToDo
                            key={todo.id}
                            todo={todo}
                            deleteTodo={this.props.deleteTodo.bind(this)}
                        />
                    ))}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos
})

export default connect(mapStateToProps, { getTodos, deleteTodo })(ToDoList)