import * as dice_types from 'redux/_types/dice';
import actions from 'redux/_actions/index';

export const endPlayerRollingProcess = (store) => (next) => (action) => {
  const { dispatch } = store;
  if (action.type === dice_types.PLAYER_ROLLING_DICE_FINISH) {
    setTimeout(() => dispatch(actions.dice.displayPlayerTotalScore(true)), 200);
    setTimeout(() => dispatch(actions.dice.displayPlayerTotalScore(false)), 1500);
  }
  return next(action);
};
