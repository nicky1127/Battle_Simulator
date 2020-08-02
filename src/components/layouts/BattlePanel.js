import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import ChracterPanel from 'components/abstraction/CharacterPanel';
import Player from 'components/characters/Player';
import Monster from 'components/characters/Monster';
import AttackPanel from 'components/layouts/AttackPanel';
import constants from 'constants/index';
import AttackEffect from 'components/elements/AttackEffect';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'relative',
    backgroundImage: (props) => `url(${props.playerCharacter.background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
    // backgroundPosition: (props) => props.position
  }
}));

const BattlePanel = (props) => {
  const { playerChrCode, monsterChrCode } = props;

  const playerCharacter = constants.characters.find((chr) => chr.code === playerChrCode);
  const monsterCharacter = constants.characters.find((chr) => chr.code === monsterChrCode);

  console.log('playerCharacter', playerCharacter);
  const classes = useStyles({ playerCharacter });

  const playerDom = <ChracterPanel characterGrid={<Player />} character={playerCharacter} />;
  const monsterDom = <ChracterPanel characterGrid={<Monster />} character={monsterCharacter} />;

  return (
    <Box id="battlePanel" className={classes.root}>
      <AttackEffect />
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
