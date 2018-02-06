import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import router from './router.js'
import store from './redux/store'

render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app'),
)

