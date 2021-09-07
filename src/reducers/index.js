import { combineReducers } from 'redux'
import generalDataReducer from './generalData';
import questionsReducer from './questions';

const reducer = combineReducers({
    generalData: generalDataReducer,
    questions: questionsReducer
});

export default  reducer;
