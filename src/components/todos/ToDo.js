import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateTodo } from '../../actions/todosAction'

export class ToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            body: "",
            is_complete: false,
            date_added: "",
            user: ""
        }
    }

    static propTypes = {
        updateTodo: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.setState({
            id: this.props.todo.id,
            body: this.props.todo.body,
            is_complete: this.props.todo.is_complete,
            date_added: this.props.todo.date_added,
            user: this.props.todo.user
        })
    }

    toggleTodo = e => {
        const is_complete = !this.state.is_complete
        this.setState({ is_complete: is_complete })
        const body = this.state.body
        const todo = { body, is_complete }
        this.props.updateTodo(this.state.id, todo)
    }

    render() {
        const { id, body, is_complete } = this.state
        return (
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="card text-white bg-secondary mb-3">
                    <input
                        type="checkbox"
                        checked={is_complete}
                        className="mr-2"
                        onChange={this.toggleTodo}
                    />
                    <div className="mr-2 lead">
                        {body}
                    </div>
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={() => this.props.deleteTodo(id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, { updateTodo })(ToDo)