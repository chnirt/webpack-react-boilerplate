import React from 'react'
import { render } from 'react-dom'
import App from './App'

import './style.css'

render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./App', () => {
    const Root = require('./App').default
    render(<Root />, document.getElementById('root'))
  })
}
