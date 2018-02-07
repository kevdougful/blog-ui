import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import blogApp from './reducers'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

let store = createStore(blogApp, {
    posts:[]
})

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)
registerServiceWorker()
