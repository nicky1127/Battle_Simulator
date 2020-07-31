import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '250px',
    height: '150px',
    margin: '30px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '3px solid #eee',
    boxSizing: 'border-box',
    backgroundColor: '#d50000',
    borderRadius: '50%',
    '&:hover': {
      cursor: ' pointer',
      backgroundColor: '#039be5'
    }
    // backgroundImage: (props) => `url(${props.src})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // backgroundPosition: (props) => props.position,
    // margin: '50px'
  },
  text: {
    color: '#fff',
    'font-family': 'Ranchers, cursive'
  }
}));

const AttackButton = (props) => {
  const classes = useStyles({ ...props });

  return (
    <Paper id="attackBtn" elevation={5} className={classes.root}>
      <Typography variant="h2" className={classes.text}>
        Attack!
      </Typography>
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

const ConnectedAttackButton = connect(mapStateToProps, mapDispatchToProps)(AttackButton);

export default ConnectedAttackButton;
