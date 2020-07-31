import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography, Zoom } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '250px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '3px solid black'
  },
  paper: {
    width: '200px',
    height: '100px',
    backgroundColor: '#ffeb3b',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    display: 'block'
  }
}));

const DiceContainer = (props) => {
  const classes = useStyles({ ...props });
  const { character, score, isRolling, displayScore } = props;
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    displayScore ? setChecked(true) : setChecked(false);
  }, [displayScore]);

  return (
    <Box
      id={`diceContainer_${character}`}
      elevation={5}
      className={clsx('diceContainer', classes.root)}
    >
      <Zoom in={checked}>
        <Box className={classes.paper}>
          <Typography className={classes.text} variant="h6">
            Total Power
          </Typography>
          <Typography className={classes.text} variant="h4">
            {score}
          </Typography>
        </Box>
      </Zoom>
    </Box>
  );
};

const mapStateToProps = (state, ownProps) => {
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

  return {
    score: ownProps.role === 'player' ? playerScore : monsterScore,
    displayScore: ownProps.role === 'player' ? displayPlayerScore : displayMonsterScore
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ConnectedDiceContainer = connect(mapStateToProps, mapDispatchToProps)(DiceContainer);

export default ConnectedDiceContainer;
