import * as types from 'redux/_types/process';

export const startRollingDiceProcess = () => {
  const obj = { type: types.START_ROLLING_DICE_PROCESS };
  return obj;
};

export const startUpdateHealthProcess = () => {
  const obj = { type: types.START_UPDATE_HEALTH_PROCESS };
  return obj;
};

const actions = { startRollingDiceProcess, startUpdateHealthProcess };

export default actions;
