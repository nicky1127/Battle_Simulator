import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import CharacterGrid from 'components/abstraction/CharacterGrid';
import HealthBar from 'components/elements/HealthBar';
import CharacterImage from 'components/elements/CharacterImage';
import constants from 'constants/index';

const useStyles = makeStyles((theme) => ({
  root: {}
}));

const Player = (props) => {
  const { code, health } = props;
  const classes = useStyles();

  const character = constants.characters.find((chr) => chr.code === code);

  const healthBar = <HealthBar max={100} current={health} />;
  const image = (
    <CharacterImage src={character.src} code={character.code} position={character.position} />
  );

  return <CharacterGrid healthBar={healthBar} image={image} name={character.name} />;
};

const mapStateToProps = (state) => {
  const {
    characterReducer: { playerChrCode, playerHealth }
  } = state;

  return { code: playerChrCode, health: playerHealth };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ConnectedPlayer = connect(mapStateToProps, mapDispatchToProps)(Player);

export default ConnectedPlayer;
