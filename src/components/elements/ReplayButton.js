import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { startRollingDiceProcess } from 'redux/_actions/process';
import ReplayIcon from '@material-ui/icons/Replay';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '250px',
    height: '150px',
    margin: '30px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '3px solid #eee',
    boxSizing: 'border-box',
    backgroundColor: '#d50000',
    borderRadius: '50%',
    '&:hover': {
      cursor: ' pointer',
      backgroundColor: '#039be5'
    }
  },
  text: {
    color: '#fff',
    'font-family': 'Ranchers, cursive'
  }
}));

const ReplayButton = (props) => {
  const { payerRolling, monsterRolling } = props;
  const classes = useStyles({ ...props });

  function rollDice() {
    if (!payerRolling && !monsterRolling) {
      props.startRollingDiceProcess();
    }
  }

  return (
    <Paper id="replayBtn" elevation={5} className={classes.root} onClick={rollDice}>
      <Typography variant="h2" className={classes.text}>
        Replay
      </Typography>
      <ReplayIcon/>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  const {
    diceReducer: { payerRolling, monsterRolling },
    layoutReducer: { displayReplayButton },
    characterReducer: { playerChrCode, monsterChrCode }
  } = state;

  return { payerRolling, monsterRolling, displayReplayButton, playerChrCode, monsterChrCode };
};

const ConnectedReplayButton = connect(mapStateToProps, {
  startRollingDiceProcess
})(ReplayButton);

export default ConnectedReplayButton;
