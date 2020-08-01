import { combineReducers } from 'redux';
import diceReducer from 'redux/reducers/diceReducer';
import layoutReducer from 'redux/reducers/layoutReducer';
import characterReducer from 'redux/reducers/charactorReducer';
import statusReducer from 'redux/reducers/statusReducer';

const rootReducer = combineReducers({
  diceReducer,
  layoutReducer,
  characterReducer,
  statusReducer
});

export default rootReducer;
