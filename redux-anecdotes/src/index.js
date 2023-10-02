import React from 'react'
import ReactDOM from 'react-dom/client'
import { legacy_createStore as createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import filterReducer from './reducers/filterReducer'
import './index.css'
import anecdoteReducer from './reducers/anecdoteReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer
})

const store = createStore(reducer)

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)