import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTodo } from '../../actions/todosAction'

export class ToDoForm extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    state = {
        body: ''
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmit = e => {
        e.preventDefault()
        const { body } = this.state
        const todo = { body }
        this.props.addTodo(todo)
        this.setState({
            body: ''
        })
    }

    render() {

        const { body } = this.state

        return (
            <div className="card card-body mt-4 mb-4">
                <div className="display-4">Add ToDo</div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ToDo</label>
                        <input
                            className="form-control"
                            type="text"
                            name="body"
                            onChange={this.onChange}
                            value={body}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addTodo })(ToDoForm)