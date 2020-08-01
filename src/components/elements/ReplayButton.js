import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { startRollingDiceProcess } from 'redux/_actions/process';
import ReplayIcon from '@material-ui/icons/Replay';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '280px',
    height: '100px',
    margin: '30px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '3px solid #eee',
    boxSizing: 'border-box',
    backgroundColor: '#d50000',
    borderRadius: '10px',
    '&:hover': {
      cursor: ' pointer',
      backgroundColor: '#039be5',
      width: '310px',
      height: '140px'
    }
  },
  text: {
    color: '#fff',
    fontSize: (props) => (props.hover ? '70px' : '60px'),
    fontFamily: 'Ranchers, cursive'
  },
  icon: {
    color: '#fff',
    fontSize: (props) => (props.hover ? '70px' : '60px'),
    marginTop: '10px'
  }
}));

const ReplayButton = (props) => {
  const { payerRolling, monsterRolling } = props;
  const [hover, setHover] = useState(false);
  const classes = useStyles({ ...props, hover });

  const handleHoverOn = () => {
    setHover(true);
  };

  const handleHoverOff = () => {
    setHover(false);
  };

  return (
    <Paper
      id="replayBtn"
      elevation={5}
      className={classes.root}
      onMouseEnter={handleHoverOn}
      onMouseLeave={handleHoverOff}
    >
      <Typography className={classes.text}>Replay</Typography>
      <ReplayIcon className={classes.icon} />
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
