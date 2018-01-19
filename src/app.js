import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import router from './router/router'

render(
  <Provider>
    {router}
  </Provider>,
  document.getElementById('app'),
)

