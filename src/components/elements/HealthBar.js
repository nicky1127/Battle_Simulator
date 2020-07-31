import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '250px',
    height: '30px'
    // border: '10px solid black',
    // boxSizing: 'border-box',
    // borderRadius: '25px'
  },
  characterImage: {
    width: '100%',
    height: '100%'
  }
}));

const HealthBar = (props) => {
  const { character } = props;

  const classes = useStyles();

  return (
    <Paper
      id={`healthbar_${character}`}
      elevation={5}
      className={clsx('healthbar', classes.root)}
    ></Paper>
  );
};

const mapStateToProps = (state) => {
  const {} = state;

  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ConnectedHealthBar = connect(mapStateToProps, mapDispatchToProps)(HealthBar);

export default ConnectedHealthBar;
