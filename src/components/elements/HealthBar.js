import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '340px',
    height: '50px',
    padding: (props) => (props.character.role === 'player' ? '20px 50px 0 0' : '20px 0 0 50px'),
    display: 'flex',
    flexDirection: (props) => (props.character.role === 'player' ? 'row' : 'row-reverse'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    textAlign: 'center',
    fontSize: '20px',
    flexBasis: '70px',
    fontFamily: 'Permanent Marker, cursive'
  },
  max: {
    width: '270px',
    height: '30px'
  },
  health: {
    backgroundColor: 'red',
    height: '100%',
    width: (props) => props.current + '%',
    borderRadius: '5px'
  }
}));

const HealthBar = (props) => {
  const { code, current } = props;

  const classes = useStyles({ ...props });

  return (
    <Box id={`healthbar_${code}`} className={clsx('healthbar', classes.root)}>
      <Typography className={classes.number}>{current + '%'}</Typography>
      <Paper elevation={5} className={classes.max}>
        <Box className={classes.health} />
      </Paper>
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

const ConnectedHealthBar = connect(mapStateToProps, mapDispatchToProps)(HealthBar);

export default ConnectedHealthBar;
