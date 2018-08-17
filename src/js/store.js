import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = {}) {
    const middleware = [
        sagaMiddleware
    ]

    const enhancers = compose(applyMiddleware(...middleware))

    const store = createStore(
        createReducer(),
        initialState,
        enhancers
    )

    return store
}
