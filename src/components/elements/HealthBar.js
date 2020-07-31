import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '250px',
    height: '30px',
    margin: '50px'
    // border: '10px solid black',
    // boxSizing: 'border-box',
    // borderRadius: '25px'
  },
  characterImage: {
    width: '100%',
    height: '100%'
  },
  health: {
    backgroundColor: 'red',
    height: '100%',
    width: (props) => props.current + '%'
  }
}));

const HealthBar = (props) => {
  const { character } = props;

  const classes = useStyles({ ...props });

  return (
    <Paper id={`healthbar_${character}`} elevation={5} className={clsx('healthbar', classes.root)}>
      <Box className={classes.health} />
    </Paper>
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
