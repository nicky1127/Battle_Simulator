import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import { startGameProcess } from 'redux/_actions/process';

const useStyles = makeStyles((theme) => ({
  root: {
    width: (props) => props.width || '280px',
    height: (props) => props.height || '100px',
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
      '-webkit-transform': 'scale(1.2, 1.2)',
      '-webkit-transition-timing-function': 'ease-out',
      '-webkit-transition-duration': '250ms',
      '-moz-transform': 'scale(1.2, 1.2)',
      '-moz-transition-timing-function': 'ease-out',
      '-moz-transition-duration': '250ms'
    }
  },
  text: {
    color: '#fff',
    fontSize: (props) => props.fontSize || '60px',
    fontFamily: 'Ranchers, cursive'
  }
}));

const ConfirmButton = (props) => {
  const { text, callback, icon } = props;
  const classes = useStyles({ ...props });

  return (
    <Paper id="replayBtn" elevation={5} className={classes.root} onClick={callback}>
      <Typography className={classes.text}>{text}</Typography>
      {icon}
    </Paper>
  );
};

const mapStateToProps = (state) => {
  const {
    diceReducer: { payerRolling, monsterRolling },
    layoutReducer: { displayConfirmButton },
    characterReducer: { playerChrCode, monsterChrCode }
  } = state;

  return { payerRolling, monsterRolling, displayConfirmButton, playerChrCode, monsterChrCode };
};

const ConnectedConfirmButton = connect(mapStateToProps, {
  startGameProcess
})(ConfirmButton);

export default ConnectedConfirmButton;
