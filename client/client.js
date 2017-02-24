import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

// configure and create our store
// createStore(reducers, initialState) // []
let initialState = {
    todos: [],
    user : {
        username: 'vincent',
        id: 11
    }
}

let store = configureStore(initialState)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)
