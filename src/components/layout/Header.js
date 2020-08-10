import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { logout } from '../../actions/authAction'


export class Header extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    }

    render() {

        const { isAuthenticated, user } = this.props.auth

        const guestLinks = (
            <Fragment>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </Fragment>
        )

        const authLinks = (
            <Fragment>
                <span className="navbar-text">
                    {user ? `Hello ${user.username}` : ""}
                </span>
                <li className="nav-item">
                    <Link to="/notes" className="nav-link">Notes</Link>
                </li>
                <li className="nav-item">
                    <Link to="/todos" className="nav-link">ToDo List</Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/login"
                        className="nav-link"
                        onClick={this.props.logout}
                    >
                        Logout
                    </Link>
                </li>
            </Fragment>
        )

        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">productIV</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        {isAuthenticated ? authLinks : guestLinks}
                    </ul>
                </div>

            </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Header)
