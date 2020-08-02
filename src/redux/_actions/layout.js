import * as types from 'redux/_types/layout';

export const displayAttackText = (payload) => {
  const obj = { type: types.DISPLAY_ATTACK_TEXT, payload };
  return obj;
};

export const displayAttackBtn = (payload) => {
  const obj = { type: types.DISPLAY_ATTACK_BUTTON, payload };
  return obj;
};

export const displayAttackEffect = (payload) => {
  const obj = { type: types.DISPLAY_ATTACK_EFFECT, payload };
  return obj;
};

export const scaleHealthBar = (payload) => {
  const obj = { type: types.SCALE_HEALTH_BAR, payload };
  return obj;
};

const actions = {
  displayAttackText,
  displayAttackBtn,
  displayAttackEffect,
  scaleHealthBar
};

export default actions;
