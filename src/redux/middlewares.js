import * as dice_types from 'redux/_types/dice';
import actions from 'redux/_actions/index';

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), duration);
  });
}
export const endPlayerRollingProcess = (store) => (next) => (action) => {
  const { dispatch } = store;
  if (action.type === dice_types.PLAYER_ROLLING_DICE_FINISH) {
    Promise.resolve()
      .then(() => delay(100))
      .then(() => dispatch(actions.dice.displayPlayerTotalScore(true)))
      .then(() => delay(1500))
      .then(() => dispatch(actions.dice.displayPlayerTotalScore(false)));
  }
  return next(action);
};

export const endMonsterRollingProcess = (store) => (next) => (action) => {
  const { dispatch } = store;
  if (action.type === dice_types.MONSTER_ROLLING_DICE_FINISH) {
    Promise.resolve()
      .then(() => delay(100))
      .then(() => dispatch(actions.dice.displayMonsterTotalScore(true)))
      .then(() => delay(1500))
      .then(() => dispatch(actions.dice.displayMonsterTotalScore(false)))
      .then(() => dispatch(actions.layout.displayAttackText(true)))
      .then(() => delay(1000))
      .then(() => dispatch(actions.layout.displayAttackText(false)))
      .then(() => delay(1000))
      .then(() => dispatch(actions.layout.displayAttackBtn(true)));
  }
  return next(action);
};


export const rollingDiceProcess = (store) => (next) => (action) => {
  const { dispatch } = store;
  if (action.type === dice_types.MONSTER_ROLLING_DICE_FINISH) {
    Promise.resolve()
      .then(() => delay(100))
      .then(() => dispatch(actions.dice.displayMonsterTotalScore(true)))
      .then(() => delay(1500))
      .then(() => dispatch(actions.dice.displayMonsterTotalScore(false)))
      .then(() => dispatch(actions.layout.displayAttackText(true)))
      .then(() => delay(1000))
      .then(() => dispatch(actions.layout.displayAttackText(false)))
      .then(() => delay(1000))
      .then(() => dispatch(actions.layout.displayAttackBtn(true)));
  }
  return next(action);
};