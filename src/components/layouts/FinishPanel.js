import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import ReplayPanel from './ReplayPanel';
import ChracterPanel from 'components/abstraction/CharacterPanel';
import Player from 'components/characters/Player';
import Monster from 'components/characters/Monster';
import AttackPanel from 'components/layouts/AttackPanel';
import constants from 'constants/index';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems:' center',
    justifyContent: 'center'
  }
}));

const FinishPanel = (props) => {
  const { } = props;

  const classes = useStyles();

  return (
    <Box id="finishPanel" className={classes.root}>
      <ReplayPanel/>
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

const ConnectedFinishPanel = connect(mapStateToProps, mapDispatchToProps)(FinishPanel);

export default ConnectedFinishPanel;
