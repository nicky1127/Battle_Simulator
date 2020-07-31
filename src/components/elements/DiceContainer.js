import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '250px',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '3px solid black'
  }
}));

const DiceContainer = (props) => {
  const classes = useStyles({ ...props });
  const { character } = props;

  return (
    <Box
      id={`diceContainer_${character}`}
      elevation={5}
      className={clsx('diceContainer', classes.root)}
    ></Box>
  );
};

const mapStateToProps = (state) => {
  const {} = state;

  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ConnectedDiceContainer = connect(mapStateToProps, mapDispatchToProps)(DiceContainer);

export default ConnectedDiceContainer;
