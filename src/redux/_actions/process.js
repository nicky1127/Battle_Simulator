import * as types from 'redux/_types/process';

export const startRollingDiceProcess = () => {
  const obj = { type: types.START_ROLLING_DICE_PROCESS };
  return obj;
};

const actions = { startRollingDiceProcess };

export default actions;
