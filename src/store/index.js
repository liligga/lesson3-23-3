import {legacy_createStore as createStore} from 'redux'
import counterReducer from './counterReducer'
import todoReducer from './todoReducer'

const store = createStore(todoReducer)

export default store