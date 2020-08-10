import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getNotes, deleteNotes } from '../../actions/notesAction'

export class Notes extends Component {
    static propTypes = {
        notes: PropTypes.array.isRequired,
        getNotes: PropTypes.func.isRequired,
        deleteNotes: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getNotes()
    }

    render() {
        return (
            <Fragment>
                <div className="row row-cols-1 row-cols-md-3">
                    {this.props.notes.map(note => (
                        <div key={note.id} className="col mb-3">
                            <div className="card text-white bg-secondary mb-3">
                                <h5 className="card-header">{note.title}</h5>
                                <div className="card-body">
                                    <p className="card-text">{note.body}</p>
                                    <Link
                                        to={`notes/${note.id}`}
                                        className="btn btn-sm btn-primary"
                                    >
                                        Note
                                    </Link>
                                    <button
                                        onClick={this.props.deleteNotes.bind(this, note.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    notes: state.notes.notes
})

export default connect(mapStateToProps, { getNotes, deleteNotes })(Notes)