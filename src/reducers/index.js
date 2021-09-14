import { combineReducers } from 'redux'
import generalDataReducer from './generalData';
import questionsReducer from './questions';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['generalData', 'questions']
}

const reducer = combineReducers({
    generalData: generalDataReducer,
    questions: questionsReducer
});

export default  persistReducer(persistConfig , reducer);
