const data = {
  diceReducer: {
    playerScore: 0,
    monsterScore: 0,
    playerRolling: false,
    monsterRolling: false,
    displayPlayerScore: false,
    displayMonsterScore: false
  },
  statusReducer: {
    round: 0,
    roundWinner: null,
    winner: null,
    stage: 'start_play'
  },
  layoutReducer: {
    displayAttackText: false,
    displayAttackButton: true,
    displayAttackEffect: null
  },
  characterReducer: {
    playerChrCode: null,
    playerHealth: 100,
    playerAttack: false,
    monsterChrCode: 'monster',
    monsterHealth: 100,
    monsterAttack: false
  }
};

export default data;
