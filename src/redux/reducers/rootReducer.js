import { combineReducers } from 'redux';
import diceReducer from 'redux/reducers/diceReducer'
import layoutReducer from 'redux/reducers/layoutReducer'

const rootReducer = combineReducers({
    diceReducer,
    layoutReducer
});

export default rootReducer;
