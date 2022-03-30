import 'react-app-polyfill/ie11' // For IE 11 support
import 'react-app-polyfill/stable'
import 'core-js'
import './polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import store from './store'
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'
import { UserContextProvider } from './context/UserContext'
Amplify.configure(aws_exports)
React.icons = icons

ReactDOM.render(
  <Provider store={store}>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
