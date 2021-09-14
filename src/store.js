import { createStore, applyMiddleware, compose }from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import reducer from './reducers'

export const store = createStore(
    reducer,
    compose(applyMiddleware(thunk))
)

export const persistor = persistStore(store);