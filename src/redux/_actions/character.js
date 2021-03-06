import * as types from 'redux/_types/character';

export const setPlayerHealth = (payload) => {
  const obj = { type: types.SET_PLAYER_HEALTH, payload };
  return obj;
};

export const setMonsterHealth = (payload) => {
  const obj = { type: types.SET_MONSTER_HEALTH, payload };
  return obj;
};

export const setPlayerAttack = (payload) => {
  const obj = { type: types.SET_PLAYER_ATTACK, payload };
  return obj;
};

export const setMonsterAttack = (payload) => {
  const obj = { type: types.SET_MONSTER_ATTACK, payload };
  return obj;
};

export const setPlayerChrCode = (payload) => {
  const obj = { type: types.SET_PLAYER_CHARACTER_CODE, payload };
  return obj;
};

const actions = {
  setPlayerAttack,
  setMonsterAttack,
  setPlayerHealth,
  setMonsterHealth,
  setPlayerChrCode
};

export default actions;
