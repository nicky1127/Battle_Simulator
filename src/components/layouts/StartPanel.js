import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import PlayPanel from './PlayPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: '#444',
    flexDirection: 'column',
    alignItems: ' center',
    justifyContent: 'center'
  }
}));

const StartPanel = (props) => {
  const {} = props;

  const classes = useStyles();

  return (
    <Box id="startPanel" className={classes.root}>
      <PlayPanel />
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

const ConnectedStartPanel = connect(mapStateToProps, mapDispatchToProps)(StartPanel);

export default ConnectedStartPanel;
