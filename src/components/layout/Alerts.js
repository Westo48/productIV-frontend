import React, { Component } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props

        if (error !== prevProps.error) {
            if (error.msg.name) {
                alert.error(`Name: ${error.msg.name.join()}`)
            }
            if (error.msg.email) {
                alert.error(`Email: ${error.msg.email.join()}`)
            }
            if (error.msg.message) {
                alert.error(`Message: ${error.msg.message.join()}`)
            }
            if (error.msg.non_field_errors) {
                alert.error(error.msg.non_field_errors.join())
            }
            if (error.msg.username) {
                alert.error(`Username: ${error.msg.username.join()}`)
            }
        }
        if (message !== prevProps.message) {
            if (message.passwordsNotMatch) {
                alert.error(message.passwordsNotMatch)
            }
            if (message.addNote) {
                alert.success(message.addNote)
            }
            if (message.deleteNote) {
                alert.success(message.deleteNote)
            }
            if (message.addTodo) {
                alert.success(message.addTodo)
            }
            if (message.deleteTodo) {
                alert.success(message.deleteTodo)
            }
            if (message.updateTodo) {
                alert.success(message.updateTodo)
            }
        }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}


const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts))
