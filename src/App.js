import React, { Component, Fragment } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import './App.css'

import store from './store'
import { } from 'react-dom'

import Header from './components/layout/Header'
import Alerts from './components/layout/Alerts'
import { } from './components/layout/Footer'
import Hub from './pages/Hub'
import Login from './components/accounts/Login'
import Register from './components/accounts/Register'
import NoteDashboard from './components/notes/Dashboard'
import Note from './components/notes/Note'
import ToDoDashboard from './components/todos/Dashboard'

import { loadUser } from './actions/authAction'
import NoteEdit from './components/notes/NoteEdit'


export default class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Alerts />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Hub} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/notes" component={NoteDashboard} />
                            <Route exact path="/notes/:id" component={Note} />
                            <Route exact path="/notes/:id/edit" component={NoteEdit} />
                            <Route exact path="/todos" component={ToDoDashboard} />
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        )
    }
}



