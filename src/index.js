import React from 'react'
import { render } from 'react-dom'
import './index.css'

import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import { Provider } from 'react-redux'
import App from './App'
import store from './store'


// Alert Options
const alertOptions = {
  timeout: 2000,
  position: 'top center',
}

render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate}{...alertOptions}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);
