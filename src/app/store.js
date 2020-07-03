import visibilityFilter from './reducers/visibilityFilter'
import todos from './reducers/todos'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'

const reducer = combineReducers({
  todos,
  visibilityFilter
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;