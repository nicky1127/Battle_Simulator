import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import CharacterGrid from 'components/abstraction/CharacterGrid';
import HealthBar from 'components/elements/HealthBar';
import CharacterImage from 'components/elements/CharacterImage';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

const Monster = (props) => {
  const classes = useStyles();

  const healthBar = <HealthBar max={100} current={30} />;
  const image = <CharacterImage src="/images/godzilla.jpg" name="Monster" position='50% 50%'/>;

  return <CharacterGrid healthBar={healthBar} image={image} name="Monster"/>;
};

const mapStateToProps = (state) => {
  const {} = state;

  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ConnectedMonster = connect(mapStateToProps, mapDispatchToProps)(Monster);

export default ConnectedMonster;
