import * as types from 'redux/_types/dice';
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

  return state;
};

export default reducer;