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
      .then(() => dispatch(actions.process.startUpdateHealthProcess()));
  }
  return next(action);
};

export const playerAttackProcess = (dispatch, monsterHealth) => {
  return Promise.resolve()
    .then(() => dispatch(actions.layout.displayAttackEffect('player')))
    .then(() => delay(200))
    .then(() => dispatch(actions.character.setPlayerAttack(true)))
    .then(() => delay(1000))
    .then(() => dispatch(actions.layout.scaleHealthBar('monster')))
    .then(() => dispatch(actions.character.setMonsterHealth(monsterHealth)))
    .then(() => delay(500))
    .then(() => dispatch(actions.layout.displayAttackEffect(null)))
    .then(() => dispatch(actions.layout.scaleHealthBar(null)))
    .then(() => delay(500))
    .then(() => dispatch(actions.character.setPlayerAttack(false)));
};

export const monsterAttackProcess = (dispatch, playerHealth) => {
  return Promise.resolve()
    .then(() => dispatch(actions.layout.displayAttackEffect('monster')))
    .then(() => delay(200))
    .then(() => dispatch(actions.character.setMonsterAttack(true)))
    .then(() => delay(1000))
    .then(() => dispatch(actions.layout.scaleHealthBar('player')))
    .then(() => dispatch(actions.character.setPlayerHealth(playerHealth)))
    .then(() => delay(500))
    .then(() => dispatch(actions.layout.displayAttackEffect(null)))
    .then(() => dispatch(actions.layout.scaleHealthBar(null)))
    .then(() => delay(500))
    .then(() => dispatch(actions.character.setMonsterAttack(false)));
};

export const updatinghealthProcess = (store) => (next) => (action) => {
  const { dispatch } = store;
  const { playerHealth, monsterHealth } = store.getState().characterReducer;
  const { playerScore, monsterScore } = store.getState().diceReducer;
  const scoreDiff = playerScore - monsterScore;
  const absScoreDiff = Math.abs(scoreDiff) * 10;
  if (action.type === process_types.START_UPDATE_HEALTH_PROCESS) {
    Promise.resolve()
      .then(() => {
        if (scoreDiff > 0) {
          if (monsterHealth - absScoreDiff > 0) {
            return playerAttackProcess(dispatch, monsterHealth - absScoreDiff);

            // Promise.resolve()
            //   .then(() => dispatch(actions.character.setPlayerAttack(true)))
            //   .then(() => delay(1000))
            //   .then(() =>
            //     dispatch(actions.character.setMonsterHealth(monsterHealth - absScoreDiff))
            //   )
            //   .then(() => delay(500))
            //   .then(() => dispatch(actions.character.setPlayerAttack(false)));
          } else {
            return playerAttackProcess(dispatch, 0)
              .then(() => dispatch(actions.status.setGameWinner('player')))
              .then(() => dispatch(actions.status.setGameStage('finish')));

            // dispatch(actions.character.setMonsterHealth(0));
            // dispatch(actions.status.setGameWinner('player'));
            // dispatch(actions.status.setGameStage('finish'));
          }
        } else if (scoreDiff < 0)
          if (playerHealth - absScoreDiff > 0) {
            return monsterAttackProcess(dispatch, playerHealth - absScoreDiff);
            // dispatch(actions.character.setMonsterAttack(true));
            // dispatch(actions.character.setPlayerHealth(playerHealth - absScoreDiff));
          } else {
            return monsterAttackProcess(dispatch, 0)
              .then(() => dispatch(actions.status.setGameWinner('monster')))
              .then(() => dispatch(actions.status.setGameStage('finish')));

            // dispatch(actions.character.setPlayerHealth(0));
            // dispatch(actions.status.setGameWinner('monster'));
            // dispatch(actions.status.setGameStage('finish'));
          }
      })
      .then(() => delay(500))
      .then(() => dispatch(actions.layout.displayAttackBtn(true)));
  }
  return next(action);
};
