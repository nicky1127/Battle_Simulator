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
  effectPlayer: {
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
  effectMonster: {
    width: '350px',
    height: '250px',
    position: 'absolute',
    right: '0',
    border: '3px solid black',
    backgroundImage: 'url(/images/thunder.png)',
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
    left: '50%'
  },
  horizTranslateMonster: {
    '-webkit-transition': '1s',
    '-moz-transition': '1s',
    '-ms-transition': '1s',
    '-o-transition': '1s',
    transition: '1s',
    transitionDelay: '0.5s',
    right: '50%'
  }
}));

const AttackEffect = (props) => {
  const { playerScore, monsterScore, displayAttackEffect, playerAttack, monsterAttack } = props;
  const scoreDiff = playerScore - monsterScore;

  const classes = useStyles({ ...props, scoreDiff });
  const [checked, setChecked] = useState(false);

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

  // useEffect(() => {
  //   displayAttackEffect ? setChecked(true) : setChecked(false);
  // }, [displayAttackEffect]);

  return <div>{content}</div>;
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
