import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import ChracterPanel from 'components/abstraction/CharacterPanel';
import Player from 'components/characters/Player';
import Monster from 'components/characters/Monster';
import AttackPanel from 'components/layouts/AttackPanel';
import constants from 'constants/index';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex'
  }
}));

const BattlePanel = (props) => {
  const { playerChrCode, monsterChrCode } = props;

  const classes = useStyles();

  const playerCharacter = constants.characters.find((chr) => chr.code === playerChrCode);
  const monsterCharacter = constants.characters.find((chr) => chr.code === monsterChrCode);

  const playerDom = <ChracterPanel characterGrid={<Player/>} character={playerCharacter} />;
  const monsterDom = <ChracterPanel characterGrid={<Monster/>} character={monsterCharacter} />;

  return (
    <Box id="battlePanel" className={classes.root}>
      {playerDom}
      <AttackPanel />
      {monsterDom}
    </Box>
  );
};

const mapStateToProps = (state) => {
  const {
    characterReducer: { playerChrCode, monsterChrCode }
  } = state;

  return { playerChrCode, monsterChrCode };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ConnectedBattlePanel = connect(mapStateToProps, mapDispatchToProps)(BattlePanel);

export default ConnectedBattlePanel;
