import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import ConfirmButton from 'components/elements/ConfirmButton';
import CharacterButton from 'components/elements/CharacterButton';
import { setGameStage } from 'redux/_actions/status';

import constants from 'constants/index';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '65%',
    height: '80%',
    backgroundColor: '#7986cb',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    boxSizing: 'border-box',
    boxShadow: '0 0 0 15px #4527a0',
    borderRadius: '15px',
    paddingTop: '30px'
  },
  characterContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '270px'
  },
  title: {
    fontFamily: 'Luckiest Guy, cursive',
    fontSize: '50px'
  },
  text: {
    fontFamily: 'Permanent Marker, cursive',
    display: 'block',
    width: '80%',
    height: '70%',
    fontSize: '30px'
  }
}));

const GuidePanel = (props) => {
  const { playerChrCode } = props;
  const classes = useStyles();

  const title = 'How You Play';

  const text = `
    Click "Attack" button in the middle of the screen to fire your move.
    Each of you then rolls two dice and the one having the biggest number of sum can decrease the other's
    health with the amount of the difference of total numbers. The winner will be the one to decrease the other's health down to 0.
    Go on! Have your try! 
    `;

  return (
    <Box id="guidePanel" className={classes.root}>
      <Typography className={classes.title}>{title}</Typography>
      <Typography classes={{ root: classes.text }}>{text}</Typography>
      <ConfirmButton
        text="Next"
        width="150px"
        height="70px"
        fontSize="30px"
        callback={() => playerChrCode && props.setGameStage('battle')}
      />
    </Box>
  );
};

const mapStateToProps = (state) => {
  const {
    characterReducer: { playerChrCode }
  } = state;

  return { playerChrCode };
};

const ConnectedGuidePanel = connect(mapStateToProps, { setGameStage })(GuidePanel);

export default ConnectedGuidePanel;
