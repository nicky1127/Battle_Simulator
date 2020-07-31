import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
    // border: '10px solid black',
    // boxSizing: 'border-box',
    // borderRadius: '25px'
  }
}));

const CharacterGrid = (props) => {
  const { healthBar, image, name } = props;

  const classes = useStyles();

  return (
    <Paper id={`CharacterGrid_${name}`} className={clsx('CharacterGrid', classes.root)}>
      {healthBar}
      {image}
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

const ConnectedCharacterGrid = connect(mapStateToProps, mapDispatchToProps)(CharacterGrid);

export default ConnectedCharacterGrid;
