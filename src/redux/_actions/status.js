import * as types from 'redux/_types/status';

export const setGameStage = (payload) => {
  const obj = { type: types.SET_GAME_STAGE, payload };
  return obj;
};

export const setGameWinner = (payload) => {
  const obj = { type: types.SET_GAME_WINNER, payload };
  return obj;
};

export const setRoundWinner = (payload) => {
  const obj = { type: types.SET_ROUND_WINNER, payload };
  return obj;
};

const actions = { setGameStage, setGameWinner, setRoundWinner };

export default actions;
