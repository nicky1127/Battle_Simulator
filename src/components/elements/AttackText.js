import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography, Fade } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '350px',
    marginBottom: '50px',
    padding: '0',
    height: '250px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 235, 59,0.6)',
    boxShadow: '0 0 0 10px #2962ff, 0 0 5px 15px #2196f3',
    borderRadius: '15px'
  },
  text: {
    color: '#333',
    fontFamily: 'Permanent Marker, cursive',
    textAlign: 'center',
    fontSize: (props) => (props.scoreDiff < 0 ? '60px' : '80px')
  }
}));

const Attacktext = (props) => {
  const { playerScore, monsterScore, displayAttackText } = props;
  const scoreDiff = playerScore - monsterScore;

  const classes = useStyles({ ...props, scoreDiff });
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    displayAttackText ? setChecked(true) : setChecked(false);
  }, [displayAttackText]);

  let text;

  if (scoreDiff > 0) {
    text = `You hit for ${scoreDiff} !`;
  } else if (scoreDiff < 0) {
    text = `Monster hits for ${Math.abs(scoreDiff)} !`;
  } else {
    text = "It's a tie!";
  }

  return (
    <Fade in={checked} timeout={1000}>
      <div id="attackText" className={classes.root}>
        <Typography className={classes.text}>{text}</Typography>
      </div>
    </Fade>
  );
};

const mapStateToProps = (state) => {
  const {
    diceReducer: { playerScore, monsterScore },
    layoutReducer: { displayAttackText }
  } = state;

  return { playerScore, monsterScore, displayAttackText };
};

const ConnectedAttacktext = connect(mapStateToProps)(Attacktext);

export default ConnectedAttacktext;
