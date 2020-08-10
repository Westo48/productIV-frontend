import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer fixed-bottom mb-3 mt-3">
                <hr />
                <div className="text-center lead small">
                    This page brought to you by Weston Southers and React Redux Django. Thank you for using this page!
                </div>
            </footer>
        )
    }
}
