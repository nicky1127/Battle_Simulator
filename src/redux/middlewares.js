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

export const endMonsterRollingProcess = (store) => (next) => (action) => {
  const { dispatch } = store;
  if (action.type === dice_types.MONSTER_ROLLING_DICE_FINISH) {
    setTimeout(() => dispatch(actions.dice.displayMonsterTotalScore(true)), 200);
    setTimeout(() => dispatch(actions.dice.displayMonsterTotalScore(false)), 1500);
    setTimeout(() => dispatch(actions.layout.displayAttackText(true)), 1500);
    setTimeout(() => dispatch(actions.layout.displayAttackText(false)), 2500);
    setTimeout(() => dispatch(actions.layout.displayAttackBtn(true)), 2500);
  }
  return next(action);
};
