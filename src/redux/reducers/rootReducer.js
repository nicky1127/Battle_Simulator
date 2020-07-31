import { combineReducers } from 'redux';
import diceReducer from 'redux/reducers/diceReducer';
import layoutReducer from 'redux/reducers/layoutReducer';
import characterReducer from 'redux/reducers/charactorReducer';

const rootReducer = combineReducers({
  diceReducer,
  layoutReducer,
  characterReducer
});

export default rootReducer;
