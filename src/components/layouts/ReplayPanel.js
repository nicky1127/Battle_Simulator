import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import ReplayButton from 'components/elements/ReplayButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    height: '50%',
    backgroundColor: '#444',
    // flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    boxSizing: 'border-box',
    boxShadow: '0 0 0 15px #333',
    borderRadius:'15px'
  }
}));

const ReplayPanel = (props) => {
  const { displayAttackButton } = props;

  const classes = useStyles();

  return (
    <Box id="replayPanel" className={classes.root}>
      <ReplayButton />
    </Box>
  );
};

const mapStateToProps = (state) => {
  const {
    layoutReducer: { displayAttackButton }
  } = state;

  return { displayAttackButton };
};

const ConnectedReplayPanel = connect(mapStateToProps)(ReplayPanel);

export default ConnectedReplayPanel;
