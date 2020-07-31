import * as types from 'redux/_types/character';
import constants from 'constants/index';

const { defaultState } = constants;

const initialState = {
  ...defaultState.characterReducer
};

const reducer = (state = initialState, action) => {
  if (action.type === types.SET_PLAYER_HEALTH) {
    return { ...state, playerHealth: action.payload };
  }

  if (action.type === types.SET_MONSTER_HEALTH) {
    return { ...state, monsterHealth: action.payload };
  }

  return state;
};

export default reducer;
