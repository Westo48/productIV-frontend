import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class Hub extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired
    }
    render() {
        const authLinks = (
            <Fragment>
                <Link to="/login" className="btn btn-primary">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
            </Fragment>
        )

        const links = (
            <Fragment>
                <Link to="/notes" className="btn btn-primary">Notes</Link>
                <Link to="/todos" className="btn btn-primary">ToDo List</Link>
            </Fragment>
        )

        return (
            <div>
                <h1 className="display-4">ProductIV</h1>
                {this.props.isAuthenticated ? links : authLinks}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Hub)