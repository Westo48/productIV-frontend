import React, { Component, Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getNote, deleteNote } from '../../actions/noteAction'

export class Note extends Component {
    static propTypes = {
        note: PropTypes.object.isRequired,
        willRedirect: PropTypes.bool.isRequired,
        getNote: PropTypes.func.isRequired,
        deleteNote: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getNote(this.props.match.params.id)
    }

    render() {
        if (this.props.willRedirect) {
            return <Redirect to="/notes" />
        }
        return (
            <Fragment>
                <div className="display-4">
                    {this.props.note.title}
                </div>
                <p className="lead">{this.props.note.body}</p>
                <Link
                    to={`/notes/${this.props.note.id}/edit`}
                    className="btn btn-primary btn-sm"
                >
                    Edit
                </Link>
                <button
                    onClick={this.props.deleteNote.bind(this, this.props.note.id)}
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            </Fragment>


        )
    }
}

const mapStateToProps = state => ({
    note: state.note.note,
    willRedirect: state.note.willRedirect
})

export default connect(mapStateToProps, { getNote, deleteNote })(Note)
