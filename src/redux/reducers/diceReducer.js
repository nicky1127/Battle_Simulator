import * as types from 'redux/_types/dice';
import { START_GAME_PROCESS } from 'redux/_types/process';
import constants from 'constants/index';

const { defaultState } = constants;

const initialState = {
  ...defaultState.diceReducer
};

const reducer = (state = initialState, action) => {
  if (action.type === types.PLAYER_ROLLING_DICE_START) {
    return { ...state, playerRolling: true };
  }
  if (action.type === types.PLAYER_ROLLING_DICE_FINISH) {
    return { ...state, playerRolling: false, playerScore: action.payload };
  }

  if (action.type === types.MONSTER_ROLLING_DICE_START) {
    return { ...state, monsterRolling: true };
  }

  if (action.type === types.MONSTER_ROLLING_DICE_FINISH) {
    return { ...state, monsterRolling: false, monsterScore: action.payload };
  }

  if (action.type === types.DISPLAY_PLAYER_TOTAL_SCORE) {
    return { ...state, displayPlayerScore: action.payload };
  }

  if (action.type === types.DISPLAY_MONSTER_TOTAL_SCORE) {
    return { ...state, displayMonsterScore: action.payload };
  }

  if (action.type === START_GAME_PROCESS) {
    return { ...state, ...defaultState.diceReducer };
  }

  return state;
};

export default reducer;
