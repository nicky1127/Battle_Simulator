import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import ConfirmButton from 'components/elements/ConfirmButton';
import { setGameStage } from 'redux/_actions/status';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '65%',
    height: '70%',
    backgroundColor: '#7986cb',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    boxSizing: 'border-box',
    boxShadow: '0 0 0 15px #4527a0',
    borderRadius: '15px',
    paddingTop: '100px'
  },
  text: {
    fontFamily: 'Luckiest Guy, cursive',
    fontSize: '80px'
  }
}));

const PlayPanel = (props) => {
  const classes = useStyles();

  const text = 'Roll The Dice Battle';

  return (
    <Box id="playPanel" className={classes.root}>
      <Typography className={classes.text}>{text}</Typography>
      <ConfirmButton text="Play !" callback={() => props.setGameStage('start_selection')} />
    </Box>
  );
};

const mapStateToProps = (state) => {
  const {} = state;

  return {};
};

const ConnectedPlayPanel = connect(mapStateToProps, { setGameStage })(PlayPanel);

export default ConnectedPlayPanel;
