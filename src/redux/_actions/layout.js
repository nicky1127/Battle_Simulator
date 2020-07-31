import * as types from 'redux/_types/layout';

export const displayAttackText = (payload) => {
  const obj = { type: types.DISPLAY_ATTACK_TEXT, payload };
  return obj;
};

export const displayAttackBtn = (payload) => {
  const obj = { type: types.DISPLAY_ATTACK_BUTTON, payload };
  return obj;
};

const actions = {
  displayAttackText,
  displayAttackBtn
};

export default actions;
