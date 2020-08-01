import * as process_types from 'redux/_types/process';
import actions from 'redux/_actions/index';
import diceRoller from 'dice-roller-3d';

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), duration);
  });
}

const rollDicePlayer = (playerChrCode, dispatch) => {
  const elementPlayer = document.getElementById(`diceContainer_${playerChrCode}`);
  const optionsPlayer = {
    element: elementPlayer, // element to display the animated dice in.
    numberOfDice: 2, // number of dice to use,
    callback: (res) => {
      const sum = res.reduce((a, b) => a + b, 0);
      dispatch(actions.dice.playerRollingDiceFinish(sum));
    }
  };
  diceRoller(optionsPlayer);
};

const rollDiceMonster = (monsterChrCode, dispatch) => {
  const elementMonster = document.getElementById(`diceContainer_${monsterChrCode}`);
  const optionsMonster = {
    element: elementMonster, // element to display the animated dice in.
    numberOfDice: 2, // number of dice to use
    callback: (res) => {
      const sum = res.reduce((a, b) => a + b, 0);
      dispatch(actions.dice.monsterRollingDiceFinish(sum));
    }
  };
  diceRoller(optionsMonster);
};

export const rollingDiceProcess = (store) => (next) => (action) => {
  const { dispatch } = store;
  const { playerChrCode, monsterChrCode } = store.getState().characterReducer;
  if (action.type === process_types.START_ROLLING_DICE_PROCESS) {
    Promise.resolve()
      .then(() => dispatch(actions.layout.displayAttackBtn(false)))
      .then(() => dispatch(actions.dice.playerRollingDiceStart()))
      .then(() => dispatch(actions.dice.monsterRollingDiceStart()))
      .then(() => rollDicePlayer(playerChrCode, dispatch))
      .then(() => delay(3000))
      .then(() => dispatch(actions.dice.displayPlayerTotalScore(true)))
      .then(() => delay(1500))
      .then(() => dispatch(actions.dice.displayPlayerTotalScore(false)))
      .then(() => delay(100))
      .then(() => rollDiceMonster(monsterChrCode, dispatch))
      .then(() => delay(3000))
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
