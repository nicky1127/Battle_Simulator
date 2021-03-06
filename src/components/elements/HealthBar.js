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
    fontFamily: 'Permanent Marker, cursive',
    color: '#f5f5f5'
    // textShadow: '4px 4px #9e9e9e'
  },
  max: {
    width: '80%',
    height: '85%',
    borderRadius: '5px'
  },
  health: {
    backgroundColor: 'red',
    height: '100%',
    width: (props) => props.current + '%',
    borderRadius: '5px'
  },
  scale: {
    '-webkit-transform': 'scale(1.1, 1.3)',
    '-webkit-transition-timing-function': 'ease-out',
    '-webkit-transition-duration': '250ms'
  },
  yellow: {
    backgroundColor: '#fff176'
  }
}));

const HealthBar = (props) => {
  const { code, current, character, scaleHealthBar } = props;

  const classes = useStyles({ ...props });

  return (
    <Box
      id={`healthbar_${code}`}
      className={clsx('healthbar', classes.root, {
        [classes.scale]: character.role === scaleHealthBar
      })}
    >
      <Typography className={classes.number}>{current + '%'}</Typography>
      <Paper
        elevation={5}
        className={clsx(classes.max, {
          [classes.yellow]: character.role === scaleHealthBar
        })}
      >
        <Box className={classes.health} />
      </Paper>
    </Box>
  );
};

const mapStateToProps = (state) => {
  const {
    layoutReducer: { scaleHealthBar }
  } = state;

  return { scaleHealthBar };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ConnectedHealthBar = connect(mapStateToProps, mapDispatchToProps)(HealthBar);

export default ConnectedHealthBar;
