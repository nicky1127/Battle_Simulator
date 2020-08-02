import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography, Fade } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '44%',
    height: '300px',
    top: '25%',
    left: '28%',
    position: 'absolute',
    border: '3px solid black',
    display: 'flex',
    alignItems: 'center'
  },
  effect: {
    width: '350px',
    height: '250px',
    position: 'absolute',
    left: '0',
    border: '3px solid black',
    backgroundImage: 'url(/images/thunder.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: '0 50%'
  },

  horizTranslate: {
    '-webkit-transition': '3s',
    '-moz-transition': '3s',
    '-ms-transition': '3s',
    '-o-transition': '3s',
    transition: '3s',
    left: '50%'
  }
}));

const AttackEffect = (props) => {
  const { playerScore, monsterScore, displayAttackEffect } = props;
  const scoreDiff = playerScore - monsterScore;

  const classes = useStyles({ ...props, scoreDiff });
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    displayAttackEffect ? setChecked(true) : setChecked(false);
  }, [displayAttackEffect]);

  return (
    <Fade in={true} timeout={1000}>
      <div id="attackEffect" className={classes.root}>
        <div className={clsx(classes.effect, { [classes.horizTranslate]: true })}></div>
      </div>
    </Fade>
  );
};

const mapStateToProps = (state) => {
  const {
    diceReducer: { playerScore, monsterScore },
    layoutReducer: { displayAttackEffect }
  } = state;

  return { playerScore, monsterScore, displayAttackEffect };
};

const ConnectedAttackEffect = connect(mapStateToProps)(AttackEffect);

export default ConnectedAttackEffect;
