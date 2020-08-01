import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import PlayPanel from './PlayPanel';
import SelectionPanel from './SelectionPanel';
import GuidePanel from './GuidePanel';

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
  const { stage } = props;

  const classes = useStyles();

  let panel;

  if (stage === 'start_play') {
    panel = <PlayPanel />;
  } else if (stage === 'start_selection') {
    panel = <SelectionPanel />;
  } else {
    panel = <GuidePanel />;
  }

  return (
    <Box id="startPanel" className={classes.root}>
      {panel}
    </Box>
  );
};

const mapStateToProps = (state) => {
  const {
    statusReducer: { stage }
  } = state;

  return { stage };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ConnectedStartPanel = connect(mapStateToProps, mapDispatchToProps)(StartPanel);

export default ConnectedStartPanel;
