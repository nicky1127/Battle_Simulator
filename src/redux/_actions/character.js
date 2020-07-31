import * as types from 'redux/_types/character';

export const setPlayerHealth = (payload) => {
  const obj = { type: types.SET_PLAYER_HEALTH, payload };
  return obj;
};

export const setMonsterHealth = (payload) => {
  const obj = { type: types.SET_MONSTER_HEALTH, payload };
  return obj;
};

const actions = {
  setPlayerHealth,
  setMonsterHealth
};

export default actions;
