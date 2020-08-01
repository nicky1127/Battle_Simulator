import * as types from 'redux/_types/layout';
import { START_GAME_PROCESS } from 'redux/_types/process';
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

  if (action.type === START_GAME_PROCESS) {
    return { ...state, ...defaultState.layoutReducer };
  }

  return state;
};

export default reducer;
