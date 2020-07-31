import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography, Fade } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '350px',
    margin: '0',
    padding: '0',
    height: '300px',
    border: '10px solid black',
    transform: 'rotate(-20deg)'
  },
  text: {
    'font-family': 'Ranchers, cursive',
    textAlign: 'center',
    fontSize: '80px'
  }
}));

const Attacktext = (props) => {
  const { playerScore, monsterScore } = props;

  const classes = useStyles({ ...props });
  const [checked, setChecked] = useState(false);

  const scoreDiff = playerScore - monsterScore;

  let text;

  if (scoreDiff > 0) {
    text = `You hit for ${scoreDiff}`;
  } else if (scoreDiff < 0) {
    text = `Monster hits for ${Math.abs(scoreDiff)}`;
  } else {
    text = "It's a tie!";
  }

  return (
    <div id="attackText" className={classes.root}>
      <Fade in={checked} timeout={1000}>
        <Typography className={classes.text}>{text}</Typography>
      </Fade>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    diceReducer: {
      playerScore,
      monsterScore,
      playerRolling,
      monsterRolling,
      displayPlayerScore,
      displayMonsterScore
    }
  } = state;

  return { playerScore, monsterScore };
};

const ConnectedAttacktext = connect(mapStateToProps)(Attacktext);

export default ConnectedAttacktext;
