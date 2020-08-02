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
    displayAttackButton: true,
    displayAttackEffect: null
  },
  characterReducer: {
    playerChrCode: 'pikachu',
    playerHealth: 50,
    playerAttack: false,
    monsterChrCode: 'monster',
    monsterHealth: 50,
    monsterAttack: false
  }
};

export default data;
