import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography, Fade } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '55%',
    height: '300px',
    top: '25%',
    left: '22%',
    position: 'absolute',
    border: '3px solid black',
    display: 'flex',
    alignItems: 'center'
  },
  effectPlayer: {
    width: '200px',
    height: '100px',
    position: 'absolute',
    left: '0',
    border: '3px solid black',
    backgroundImage: 'url(/images/thunder.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: '0 50%'
  },
  effectMonster: {
    width: '250px',
    height: '150px',
    position: 'absolute',
    right: '0',
    border: '3px solid black',
    backgroundImage: 'url(/images/fire.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: '0 50%'
  },

  horizTranslatePlayer: {
    '-webkit-transition': '1s',
    '-moz-transition': '1s',
    '-ms-transition': '1s',
    '-o-transition': '1s',
    transition: '1s',
    transitionDelay: '0.5s',
    width: '350px',
    height: '250px',
    left: '50%'
  },
  horizTranslateMonster: {
    '-webkit-transition': '1s',
    '-moz-transition': '1s',
    '-ms-transition': '1s',
    '-o-transition': '1s',
    transition: '1s',
    transitionDelay: '0.5s',
    width: '80%',
    height: '500px',
    right: '8%'
  }
}));

const AttackEffect = (props) => {
  const { playerScore, monsterScore, displayAttackEffect, playerAttack, monsterAttack } = props;
  const scoreDiff = playerScore - monsterScore;

  const classes = useStyles({ ...props, scoreDiff });

  let content;

  if (displayAttackEffect === 'player') {
    content = (
      <div id="attackEffect" className={classes.root}>
        <div
          className={clsx(classes.effectPlayer, { [classes.horizTranslatePlayer]: playerAttack })}
        ></div>
      </div>
    );
  } else if (displayAttackEffect === 'monster') {
    content = (
      <div id="attackEffect" className={classes.root}>
        <div
          className={clsx(classes.effectMonster, {
            [classes.horizTranslateMonster]: monsterAttack
          })}
        ></div>
      </div>
    );
  }

  // return <div>{content}</div>;
  return (
    <div id="attackEffect" className={classes.root}>
      <div
        className={clsx(classes.effectPlayer, { [classes.horizTranslatePlayer]: playerAttack })}
      ></div>
      <div
        className={clsx(classes.effectMonster, {
          [classes.horizTranslateMonster]: monsterAttack
        })}
      ></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    diceReducer: { playerScore, monsterScore },
    layoutReducer: { displayAttackEffect },
    characterReducer: { playerAttack, monsterAttack }
  } = state;

  return { playerScore, monsterScore, displayAttackEffect, playerAttack, monsterAttack };
};

const ConnectedAttackEffect = connect(mapStateToProps)(AttackEffect);

export default ConnectedAttackEffect;
