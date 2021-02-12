import React from 'react'
import ReactGA from 'react-ga'
import { render } from 'react-dom'

import CssBaseline from '@material-ui/core/CssBaseline'

import { Provider } from 'react-redux'

import store from './state'

import App from './App'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
  // TODO: add local UA
  ReactGA.initialize('')
  ReactGA.pageview(window.location.pathname + window.location.search)
} else {
  // eslint-disable-next-line no-console
  console.warn(`Google Analytics was omitted.
    process.env.NODE_ENV: ${process.env.NODE_ENV}`)
}

render(
  <Provider store={store}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById('root')
)
