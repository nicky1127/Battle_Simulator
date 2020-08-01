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
    stage: 'battle'
  },
  layoutReducer: {
    displayAttackText: false,
    displayAttackButton: true
  },
  characterReducer: {
    playerChrCode: 'pikachu',
    playerHealth: 1,
    playAttack: false,
    monsterChrCode: 'monster',
    monsterHealth: 2,
    monsterAttack: false
  }
};

export default data;
