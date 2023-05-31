import {combineReducers, legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import counterReducer from './counterReducer'
import todoReducer from './todoReducer'
import {composeWithDevTools} from '@redux-devtools/extension'

const rootReducer = combineReducers({
    todos: todoReducer,
    counter: counterReducer
})

// const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;


const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store