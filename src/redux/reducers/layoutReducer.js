import * as types from 'redux/_types/layout';
import constants from 'constants/index';

const { defaultState } = constants;

const initialState = {
  ...defaultState.layoutReducer
};

const reducer = (state = initialState, action) => {
  if (action.type === types.DISPLAY_ATTACK_TEXT) {
    return { ...state, displayAttackText: action.payload };
  }

  if (action.type === types.DISPLAY_ATTACK_BUTTON) {
    return { ...state, displayAttackButton: action.payload };
  }

  return state;
};

export default reducer;
