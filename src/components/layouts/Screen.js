import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { connect } from 'react-redux';
import BattlePanel from 'components/layouts/BattlePanel';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1400px',
    height: '700px',
    border: '10px solid black',
    boxSizing: 'border-box',
    borderRadius: '25px'
  }
}));

const MainContainer = (props) => {
  const {} = props;

  const classes = useStyles();

  return (
    <Box id="screenContainer" className={classes.root}>
      <BattlePanel />
    </Box>
  );
};

const mapStateToProps = (state) => {
  const {} = state;

  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ConnectedMainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default ConnectedMainContainer;
