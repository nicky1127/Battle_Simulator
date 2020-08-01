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
    stage: 'start_selection'
  },
  layoutReducer: {
    displayAttackText: false,
    displayAttackButton: true
  },
  characterReducer: {
    playerChrCode: null,
    playerHealth: 100,
    playAttack: false,
    monsterChrCode: 'monster',
    monsterHealth: 100,
    monsterAttack: false
  }
};

export default data;
