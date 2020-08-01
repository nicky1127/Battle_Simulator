import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import { startGameProcess } from 'redux/_actions/process';

const useStyles = makeStyles((theme) => ({
  root: {
    width: (props) => props.width || '280px',
    height: (props) => props.width || '100px',
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
    fontSize: (props) => (props.hover ? '70px' : '60px'),
    fontFamily: 'Ranchers, cursive'
  }
}));

const ConfirmButton = (props) => {
  const { text, callback, icon } = props;
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
      onClick={callback}
      onMouseEnter={handleHoverOn}
      onMouseLeave={handleHoverOff}
    >
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
