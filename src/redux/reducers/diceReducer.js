import * as types from 'redux/_types/dice';
import constants from 'constants/index';

const { defaultState } = constants;

const initialState = {
  ...defaultState.diceReducer
};

const reducer = (state = initialState, action) => {
  if (action.type === types.PARSE_DESKTOP_URL_START) {
    return { ...state, urlObj: null, parsingURL: true, parsingSuccURL: false };
  }

  if (action.type === types.PARSE_DESKTOP_URL_SUCCESS) {
    return { ...state, urlObj: action.payload, parsingURL: false, parsingSuccURL: true };
  }

  if (action.type === types.PARSE_DESKTOP_URL_FAILURE) {
    return { ...state, parsingURL: false, parsingSuccURL: false };
  }

  return state;
};

export default reducer;
