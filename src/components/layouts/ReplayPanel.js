import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import ReplayButton from 'components/elements/ReplayButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '55%',
    height: '60%',
    backgroundColor: '#7986cb',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    boxSizing: 'border-box',
    boxShadow: '0 0 0 15px #4527a0',
    borderRadius: '15px',
    paddingTop:'100px'
  },
  text: {
    fontFamily: 'Ranchers, cursive',
    fontSize: '50px'
  }
}));

const ReplayPanel = (props) => {
  const { winner } = props;

  const classes = useStyles();

  let text;

  if (winner === 'player') {
    text = 'Congratulations! You win!';
  } else {
    text = 'Sorry, You lose!';
  }

  return (
    <Box id="replayPanel" className={classes.root}>
      <Typography className={classes.text}>{text}</Typography>
      <ReplayButton />
    </Box>
  );
};

const mapStateToProps = (state) => {
  const {
    statusReducer: { winner }
  } = state;

  return { winner };
};

const ConnectedReplayPanel = connect(mapStateToProps)(ReplayPanel);

export default ConnectedReplayPanel;
