import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getNote, updateNote } from '../../actions/noteAction'

export class UpdateForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: ""
        }
    }

    static propTypes = {
        note: PropTypes.object.isRequired,
        willRedirect: PropTypes.bool.isRequired,
        getNote: PropTypes.func.isRequired,
        updateNote: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getNote(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.note !== this.props.note) {
            this.setState({
                title: nextProps.note.title,
                body: nextProps.note.body
            });
        }
    }

    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmit = e => {
        e.preventDefault()
        const { title, body } = this.state
        const note = { title, body }
        this.props.updateNote(this.props.note.id, note)
    }

    render() {
        const { title, body } = this.state

        if (this.props.willRedirect) {
            return <Redirect to={`/notes/${this.props.note.id}`} />
        }

        return (
            <div className="card card-body mt-4 mb-4">
                <div className="display-4">Update Note</div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            value={title}
                        />
                    </div>
                    <div className="form-group">
                        <label>Body</label>
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
                            Update
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    note: state.note.note,
    willRedirect: state.note.willRedirect
})

export default connect(mapStateToProps, { getNote, updateNote })(UpdateForm)
