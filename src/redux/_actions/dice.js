import * as types from 'redux/_types/dice';

export const playerRollingDiceStart = () => {
  const obj = { type: types.PLAYER_ROLLING_DICE_START };
  return obj;
};

export const playerRollingDiceFinish = (payload) => {
  const obj = { type: types.PLAYER_ROLLING_DICE_FINISH, payload };
  return obj;
};

export const monsterRollingDiceStart = () => {
  const obj = { type: types.MONSTER_ROLLING_DICE_START };
  return obj;
};

export const monsterRollingDiceFinish = (payload) => {
  const obj = { type: types.MONSTER_ROLLING_DICE_FINISH, payload };
  return obj;
};

export const displayPlayerTotalScore = (payload) => {
  const obj = { type: types.DISPLAY_PLAYER_TOTAL_SCORE, payload };
  return obj;
};

export const displayMonsterTotalScore = (payload) => {
  const obj = { type: types.DISPLAY_MONSTER_TOTAL_SCORE, payload };
  return obj;
};

const actions = {
  playerRollingDiceStart,
  playerRollingDiceFinish,
  monsterRollingDiceStart,
  monsterRollingDiceFinish
};

export default actions;
