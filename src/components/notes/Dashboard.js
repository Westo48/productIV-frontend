// todo if user isnt authenticated then redirect them to login
import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Form from './Form'
import Notes from './Notes'

export class Dashboard extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired
    }

    render() {
        if (!this.props.isAuthenticated) {
            return <Redirect to="/login" />
        }
        return (
            <Fragment>
                <h1 className="display-4">Notes</h1>
                <Form />
                <Notes />
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Dashboard)