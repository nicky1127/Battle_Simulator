import * as types from 'redux/_types/status';
import constants from 'constants/index';

const { defaultState } = constants;

const initialState = {
  ...defaultState.statusReducer
};

const reducer = (state = initialState, action) => {
  if (action.type === types.SET_GAME_STAGE) {
    return { ...state, stage: action.payload };
  }

  if (action.type === types.SET_GAME_WINNER) {
    return { ...state, winner: action.payload };
  }

  if (action.type === types.SET_ROUND_WINNER) {
    return { ...state, roundWinner: action.payload, round: state.round + 1 };
  }

  return state;
};

export default reducer;
